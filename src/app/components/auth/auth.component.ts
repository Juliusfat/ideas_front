import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateWhitespace } from '@app/utils/validators';
import { AuthType, AuthDTO } from '@app/models/auth';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  loading = false;

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required, validateWhitespace]),
      password: this.fb.control('', [Validators.required, validateWhitespace])
    });
  }

  auth(authType: AuthType = 'login') {
    this.loading = true;
    const userConnect: AuthDTO = { username : this.authForm.get('username').value, password: this.authForm.get('password').value};
    if (authType === 'login') {
      this.authService.login(userConnect).subscribe(
        (user : User ) => {
          if(user) {
            this.authService.saveToken(user.token);
            this.loading = false;
            this.router.navigate(['/']);
          }
        }
      );
    } else {
      this.authService.register(userConnect).subscribe(
        (user : User ) => {
          if(user) {
            this.authService.saveToken(user.token);
            this.loading = false;
            this.router.navigate(['/']);
          }
        }
      );
    }
  }

}
