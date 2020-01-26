import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { AuthType, AuthDTO } from '@app/models/auth';
import { Observable } from 'rxjs';
import { User } from '@app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) { }

  private auth(authType: AuthType, data: AuthDTO) {
    return this.http.post(`${this.api}/${authType}`, data);
  }

  get token() {
    return localStorage.getItem('idea_token');
  }

  saveToken(value: string) {
    if ( value ) {
      localStorage.setItem('idea_token', value);
    } else {
      localStorage.clear();
    }
  }

  whoami(): Observable<User> {
    return this.http.get<User>(`${this.api}/whoami`, {
      headers: { authorization: `Bearer ${this.token}` }
    });
  }

  login (data: AuthDTO) {
    return this.auth('login', data);
  }

  register (data: AuthDTO) {
    return this.auth('register', data);
  }

}
