import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN='sanctumToken';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setToken(data:string){
    sessionStorage.setItem(TOKEN,data)
  }
  getToken():string{
    return sessionStorage.getItem(TOKEN) || '';
  }
  removeToken(){
    sessionStorage.removeItem(TOKEN);
  }
}
