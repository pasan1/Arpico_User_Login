import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserDTO from "../../../../dto/UserDTO";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-sign-up-items-page',
  templateUrl: './sign-up-items-page.component.html',
  styleUrls: ['./sign-up-items-page.component.scss']
})
export class SignUpItemsPageComponent implements OnInit {

  signUpForm = new FormGroup({
    fName: new FormControl('', [Validators.minLength(3), Validators.required]),
    uName: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(9),
      Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  })

  loading=false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.loading=true;
    const date = new Date();
    const time = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds()

    const dto = new UserDTO(
      this.signUpForm.get('fName')?.value.toString().trim(),
      this.signUpForm.get('uName')?.value.toString().trim(),
      this.signUpForm.get('email')?.value.toString().trim(),
      this.signUpForm.get('password')?.value.toString().trim(),
      this.signUpForm.get('mobile')?.value.toString().trim(),
      date,
    );

    this.userService.register(dto).subscribe(response => {
      this.loading=false;
      console.log(response);
    }, error => {
      this.loading=false;
      console.log(error);
    })

  }
}
