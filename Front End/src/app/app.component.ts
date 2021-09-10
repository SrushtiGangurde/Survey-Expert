import { Component } from '@angular/core';
import { RouteService } from './route.service';
import { Router, ActivatedRoute,RouterEvent,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey-expert-front-end';

  private previousUrl: string;
  private currentUrl: string;

  constructor(
    private router:Router,
    private routerService: RouteService
    ) {

    //   this.currentUrl = this.router.url;
    //   this.previousUrl = null;

    //   this.router.events
    //               .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
    //               .subscribe((event: NavigationEnd) => {
    //                 console.log(this.currentUrl)
    //                   this.previousUrl = this.currentUrl;
    //                   this.currentUrl = event.urlAfterRedirects;
    //                   console.log("prev: ", this.previousUrl)
    //                   console.log("curr: ", this.currentUrl)
    //               });

    // 
   }
}
