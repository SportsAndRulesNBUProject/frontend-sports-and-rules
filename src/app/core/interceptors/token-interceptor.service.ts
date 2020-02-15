import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCookieService } from '../services/auth-cookie.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    constructor(
        private readonly authCookieService: AuthCookieService,
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const token = this.authCookieService.get('token');

        req = req.clone({
            setHeaders: {
                authorization: `Bearer ${token}`,
            }
        });

        return next.handle(req);
    }
}
