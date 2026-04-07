import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '@org/data-access-auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getToken();

  if(token){
    const autReq = req.clone({
      setHeaders:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers':'*',
        'Content-Type':'application/json',
        'Accept':'*/*',
        'mode': 'no-cors',
        'Authorization':`Bearer ${token}`
      }
    });
    return next(autReq);
  }
  return next(req);
};
