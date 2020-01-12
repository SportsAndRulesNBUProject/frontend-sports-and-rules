import { TestBed } from '@angular/core/testing';

import { AuthCookieService } from './auth-cookie.service';

describe('AuthCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthCookieService = TestBed.get(AuthCookieService);
    expect(service).toBeTruthy();
  });
});
