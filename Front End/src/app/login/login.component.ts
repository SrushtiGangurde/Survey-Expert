import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router, ActivatedRoute,RouterEvent,NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

import { SignupService } from 'src/services/signup.service';
import { RouteService } from '../route.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token : string = null;
  returnUrl:string;
  prev;
  credentials = {
    username: '',
    password : '',
  }
  previousRoute;
  private previousUrl: string;
  private currentUrl: string;

  constructor(private login : LoginService,
    private route: ActivatedRoute,
    private router:Router,
    private routerService: RouteService
    ) {

      // this.currentUrl = this.router.url;
      // this.previousUrl = null;

      // this.router.events
      //             .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      //             .subscribe((event: NavigationEnd) => {
      //                 this.previousUrl = this.currentUrl;
      //                 this.currentUrl = event.urlAfterRedirects;
      //                 console.log("prev: ", this.previousUrl)
      //                 console.log("curr: ", this.currentUrl)
      //             });

     }

  ngOnInit(): void {
    this.routerService.loadRouting();

    // this.login.logout();

    this.previousRoute = this.routerService.getPreviousUrl();
    console.log(this.previousRoute);
    // this.previousRoute = '/giveSurvey'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/giveSurvey/1/survey 1';
    console.log(this.returnUrl);

  }
  
  public onSignIn (){

    console.log("form is submitted");

    if((this.credentials.username != '' && this.credentials.password != '') &&
    (this.credentials.username != null && this.credentials.password != null) ){
        // console.log("we have to fill the form");
        this.login.generateToken(this.credentials).subscribe(
          (response : any) => {
            // success
            console.log("success");
            console.log(response);

            //login
            this.login.login(response.token);

            this.login.getCurrentUser().subscribe(
              (user : any) => {
                this.login.setUser(user);
                console.log(user);
                // redirect : admin dashboard
                if(this.login.getUserRole()=="ADMIN")
                {
                  //admin dashboard
                  window.location.href = "/adminHome/welcome"
                }
                else if(this.login.getUserRole()=="NORMAL")
                {
                  // rdirect : user dashboard
                  if (this.previousRoute.includes('giveSurvey')==true){
                    this.router.navigateByUrl(this.returnUrl);
                  }
                  else{
                  window.location.href = "/userHome"
                  }
                }
                else{
                  this.login.logout();
                }

              },
              (error)=>{

              }
            )
          },
          (error) => {
            // fail
            console.log("error");
            Swal.fire({
              title: 'Wrong username or password!',
            })
            console.log(error);
          }
        )

        
    }else{
      console.log("fields are empty !!");
      
    }
    
  }

}

