import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title = 'fe-notabarista';
  userInfo: any = '';

  constructor(private apiService: ApiService) {

  }

  showUserInfo() {
    this.apiService.getUserInfo()
      .subscribe((data) => {
        this.userInfo = data;
      });
  }

  ngOnInit(): void {
  }

}
