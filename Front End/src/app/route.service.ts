import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private history = [];

  constructor(private router: Router) {
    
     }

     public loadRouting(): void {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(({urlAfterRedirects}: NavigationEnd) => {
          this.history = [...this.history, urlAfterRedirects];
        });
        console.log(this.history);
    }

    public getPreviousUrl(): string {
      return this.history[this.history.length - 2] || '/index';
    }
  }
