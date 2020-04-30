import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [AuthService],
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.authService.signUp({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(resData => {
      this.authService.setUser();
      console.log(resData);
    });
  }

}
