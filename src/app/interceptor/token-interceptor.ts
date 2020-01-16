import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '@app/services/auth.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private api: string = environment.api_server + '/auth';

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.url.includes(this.api)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.token}`
        }
      });
    }
    return next.handle(request);
  }

}
