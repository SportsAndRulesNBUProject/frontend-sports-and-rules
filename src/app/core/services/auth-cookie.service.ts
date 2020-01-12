import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthCookieService {
    constructor() { }

    get(key: string): string {
        return Cookie.get(key);
    }

    set(key: string, value: string): void {
        Cookie.set(key, JSON.stringify(value));
    }

    delete(key: string): void {
        Cookie.delete(key);
    }
}
