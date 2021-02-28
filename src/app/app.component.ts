import { Component } from '@angular/core';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

}
