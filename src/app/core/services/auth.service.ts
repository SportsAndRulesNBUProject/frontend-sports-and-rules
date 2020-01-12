import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { LoginDTO } from '../../users/models/login.dto';
import { ShowUserDTO } from '../../users/models/show-user.dto';
import { AuthCookieService } from './auth-cookie.service';

@Injectable()
export class AuthService {
	private readonly isLoggedSubject$: BehaviorSubject<
		boolean
	> = new BehaviorSubject(this.isUserLoggedIn());
	private readonly loggedUserSubject$: BehaviorSubject<
		ShowUserDTO
	> = new BehaviorSubject(this.loggedUser());

	constructor(
		private readonly router: Router,
		private readonly authCookieService: AuthCookieService,
		private readonly helper: JwtHelperService
	) {}

	public logIn(user: LoginDTO) {
		// should call backend, pipe the responce, do the job with the token and return the observable
		// tslint:disable-next-line:max-line-length
		const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhYmMtMmFiYyIsInVzZXJuYW1lIjoic29tZW9uZSIsImVtYWlsIjoic29tZW9uZUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTkyMzkwMjJ9.ZbqThs4MVDqCVFGASaexZux_OtNWT5nwyDEV0_bNRwM';
		const mockUser = { username: 'someone', password: '!12345678a' };
		if (
			user.username === mockUser.username &&
			user.password === mockUser.password
		) {
			this.authCookieService.set('token', mockToken);
			const { iat, ...userFromToken } = this.getDecodedAccessToken(
				mockToken
			);
			this.isLoggedSubject$.next(true);
			this.loggedUserSubject$.next(userFromToken);

			return of(mockToken);
		} else {
			return throwError({ msg: 'Invalid user' });
		}
	}

	public logout() {
		// should call backend
		this.authCookieService.delete('token');

		this.isLoggedSubject$.next(false);
		this.loggedUserSubject$.next(null);

		this.router.navigate(['/']);
	}

	public register() {
		// call backend and return observable
	}

	public isTokenExpired() {
		const token = this.authCookieService.get('token');

		return this.helper.isTokenExpired(token);
	}

	private isUserLoggedIn() {
		const token = this.authCookieService.get('token');
		return !!token;
	}

	public get isLogged$(): Observable<boolean> {
		return this.isLoggedSubject$.asObservable();
	}

	public get loggedUser$(): Observable<ShowUserDTO> {
		return this.loggedUserSubject$.asObservable();
	}

	public getDecodedAccessToken(token: string) {
		try {
			return this.helper.decodeToken(token);
		} catch (error) {
			// silent error
		}
	}

	private loggedUser(): ShowUserDTO {
		try {
			return this.helper.decodeToken(this.authCookieService.get('token'));
		} catch (error) {
			// in case of StorageService tampering
			this.isLoggedSubject$.next(false);

			return null;
		}
	}
}
