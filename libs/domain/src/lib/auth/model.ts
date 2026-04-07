export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // secondes
}

export interface User{
    id:string;
    nom:string;
    prenom:string;
    email:string;
    role:string;
    email_verified_at:string;
    two_factor_secret:string;
    two_factor_recovery_codes:string;
    two_factor_confirmed_at:string;
}
export interface LoggedUser {
    success: boolean;
    user: User;  
    token: string;
    message: string;
}