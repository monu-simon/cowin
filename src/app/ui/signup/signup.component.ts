import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ci-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value.username)
  }

}
