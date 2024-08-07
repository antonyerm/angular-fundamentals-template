import {Inject, Injectable, InjectionToken } from '@angular/core';

const TOKEN = 'SESSION_TOKEN'; // Use this constant for the session storage entry key
export const WINDOW = new InjectionToken<Window>('Window');
// Add your code here

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(WINDOW) private window: Window) { }

  setToken(token: string){
    // Add your code here
    this.window.sessionStorage.setItem(TOKEN, token);
  }

  getToken(): string | null {
    // Add your code here
    return this.window.sessionStorage.getItem(TOKEN)
  }

  deleteToken(){
    // Add your code here
    this.window.sessionStorage.removeItem(TOKEN);
  }
}
