
 import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

const TOKEN_HEADER = "Authorization";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService:LoginService){

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
            // add the JWT Token (local storage request)
            let authReq = req;
            const token = this.loginService.getToken();
            if(token != null){
                authReq = authReq.clone({
                    setHeaders : {
                        TOKEN_HEADER : `Bearer ${token}`
                    }
                });
            }
            return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    {
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi : true
    }
];