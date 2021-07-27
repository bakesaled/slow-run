import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionDataService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('auth/login', { username, password });
  }

  logout() {
    return this.http.post<any>('auth/logout', {});
  }

  refresh(token: string) {
    return this.http.get<any>('auth/refresh?token=' + token);
  }
}
