import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { LoginDTO } from '../../users/models/login.dto';
import { ShowUserDTO } from '../../users/models/show-user.dto';
import { AuthCookieService } from './auth-cookie.service';
import { HttpClient } from '@angular/common/http';
import { MessageResponseDTO } from 'src/app/models/messageResponse.dto';
import { RegisterDTO } from 'src/app/users/models/register.dto';
import { LoginResponseDTO } from 'src/app/models/loginResponse.dto';
import { map, tap } from 'rxjs/operators';

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
		private readonly helper: JwtHelperService,
		private readonly http: HttpClient,
	) {}

	public logIn(user: LoginDTO) {
		return this.http.post<LoginResponseDTO>(`//localhost:8080/api/auth/signin`, user).pipe(
			tap(
				(res: LoginResponseDTO) => {
					console.log(res);

					this.authCookieService.set('token', res.token);
					this.isLoggedSubject$.next(true);
					this.loggedUserSubject$.next({ username: res.username, id: res.id, email: res.email, role: res.roles });
				},
			)
		);
	}

	public logout() {
		// should call backend
		this.authCookieService.delete('token');

		this.isLoggedSubject$.next(false);
		this.loggedUserSubject$.next(null);
		this.router.navigate(['/']);
	}

	public register(user: RegisterDTO) {
		// call backend and return observable
		return this.http.post<MessageResponseDTO>(`//localhost:8080/api/auth/signup`, user);
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
