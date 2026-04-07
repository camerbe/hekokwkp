import { Observable } from 'rxjs';
import { AuthTokens, LoggedUser, LoginCredentials } from "./model";

export const AUTH_REPOSITORY = 'AUTH_REPOSITORY';

export interface AuthRepository {
  login(credentials: LoginCredentials): Observable<LoggedUser>;
  
  logout(): Observable<void>;
  
  //refresh(refreshToken: string): Observable<AuthTokens>;
}