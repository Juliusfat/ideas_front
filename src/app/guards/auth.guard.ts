import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router) {}

  canActivate() {
    return this.dealAccess();
}
/**
 * If user is not authenticated redirect to /login
 * @private
 * @returns {Observable<boolean>}
 * @memberof AuthGuard
 */
private dealAccess(): boolean {
    if (localStorage.getItem('idea_token')) {
        // Verification que la session est toujour valide
        return true;
    } else {
        this.router.navigate(['/auth']);
        return false;
        // return true;
    }
}
  
}
