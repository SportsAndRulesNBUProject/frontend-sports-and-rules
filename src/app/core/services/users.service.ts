import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ShowUserDTO } from '../../users/models/show-user.dto';

@Injectable()
export class UsersService {

  constructor() { }

  public getUser(id: string): Observable<ShowUserDTO> {
	const mockUser = { id: '1abc-2abc', username: 'someone', email: 'someone@gmail.com', role: 'admin' };
	if (id === mockUser.id) {
		return of(mockUser);
	} else {
		return throwError({ msg: 'no such user' });
	}
  }
}
