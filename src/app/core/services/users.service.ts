import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ShowUserDTO } from '../../users/models/show-user.dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(
	  private readonly http: HttpClient,
  ) { }

  public getUser(id: string): Observable<ShowUserDTO> {
	return this.http.get<ShowUserDTO>(`//localhost:8080/api/user`, {});
  }
}
