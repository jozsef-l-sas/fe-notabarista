import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getUserInfo() {
    return this.httpClient.get('/user-management/nothing/test-okta-user', {responseType: 'text'});
  }

}
