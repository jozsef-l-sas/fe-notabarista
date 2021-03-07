import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

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
