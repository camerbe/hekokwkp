import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthRepository, AuthTokens, LoggedUser, LoginCredentials } from '@org/auth';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { APP_CONFIG } from '@org/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthRepository {
  //constructor(private http: HttpClient) {}

  private http=inject(HttpClient);
  private config=inject(APP_CONFIG);
  private localStorageService=inject(LocalStorageService);

  login(credentials: LoginCredentials): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(`${this.config.apiUrl}/login`, credentials).pipe(
      tap(res => {
        this.localStorageService.setToken(res.token);
      }),
      catchError(err => throwError(() => err))
    );
  }
  logout(): Observable<void> {
    return this.http.post<void>(`${this.config.apiUrl}/logout`, { token: this.localStorageService.getToken() });
  }
  // refresh(refreshToken: string): Observable<AuthTokens> {
  //   return this.http.post<AuthTokens>('/api/auth/refresh', { refreshToken });
  // }
  
}
