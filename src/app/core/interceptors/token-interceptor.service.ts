import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthCookieService } from '../services/auth-cookie.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
	private readonly authCookieService: AuthCookieService,
	private readonly authService: AuthService,
	private readonly router: Router,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
	const token = this.authCookieService.get('token');

	if (token) {
	// check if token is expired
	// may add expiration when we set cookie !!

	if ( this.authService.isTokenExpired() ) {
		this.router.navigateByUrl('/landing');
	}

 req = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        }
      });
    }

 return next.handle(req);
  }
}
