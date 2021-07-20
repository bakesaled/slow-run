import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionDataService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('auth/login', { username, password });
  }

  logout(username: string) {
    return this.http.post<any>('auth/logout', { username });
  }

  refresh(username: string) {
    return this.http.post<any>('auth/refresh', { username });
  }
}
