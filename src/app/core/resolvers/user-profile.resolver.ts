import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShowUserDTO } from '../../users/models/show-user.dto';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserProfileResolver implements Resolve<any> {

    constructor(
        private readonly usersService: UsersService,
        private readonly router: Router,
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ShowUserDTO> {
        const id = route.paramMap.get('id');
        return this.usersService.getUser(id).pipe(
            map(
                (user: ShowUserDTO) => {
                    console.log(user);
                    return user;
                },
                (error) => {
                    console.log(error.msg);
                    // notify
                    // this.router.navigateByUrl('/not-found');
                }
            )
        );
    }
}
