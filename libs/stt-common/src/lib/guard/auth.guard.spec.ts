import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from '@stt-nx-workspace/stt-common';

describe('AuthGuard 1', () => {
  let guard: AuthGuard;
  let tokenService: TokenService;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  const helper = {
    isTokenExpired: jasmine.createSpy('isTokenExpired').and.returnValue(false)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, TokenService, { provide: Router, useValue: router }, { provide: JwtHelperService, useValue: helper }]
    });
  });

  afterEach(() => {
    tokenService.clearToken();
  });

  beforeEach(() => {
    guard = TestBed.get(AuthGuard);
    tokenService = TestBed.get(TokenService);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should not activate without token', () => {
    router.navigate.calls.reset();
    expect(guard.canActivate(null, null)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should activate with valid token', inject([AuthGuard], (g: AuthGuard) => {
    router.navigate.calls.reset();
    tokenService.saveToken('{"token":"asdasd"}');
    expect(guard.canActivate(null, null)).toBe(true);
    expect(router.navigate).toHaveBeenCalledTimes(0);
  }));
});

describe('AuthGuard 2', () => {
  let guard: AuthGuard;
  let tokenService: TokenService;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  const expiredHelper = {
    isTokenExpired: jasmine.createSpy('isTokenExpired').and.returnValue(true)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, TokenService, { provide: Router, useValue: router }, { provide: JwtHelperService, useValue: expiredHelper }]
    });
  });

  afterEach(() => {
    tokenService.clearToken();
  });

  beforeEach(() => {
    guard = TestBed.get(AuthGuard);
    tokenService = TestBed.get(TokenService);
  });

  it('should not activate with expired token', () => {
    router.navigate.calls.reset();
    tokenService.saveToken('{"token":"asdasd"}');
    expect(guard.canActivate(null, null)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
