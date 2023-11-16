import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router);

  registerData: RegisterData = {
    UserName: "",
    Email: "",
    Password: "",
  }

  async register(){
    this.authService.register(this.registerData).then(res => {
      if(res.ok) this.router.navigate(["/login"]);
    });
  }
}


