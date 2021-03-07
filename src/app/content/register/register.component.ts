import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('[- +()0-9]{6,}')] ],
      avatarURL: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ]
   });
  }

  ngOnInit(): void {
  }

}
