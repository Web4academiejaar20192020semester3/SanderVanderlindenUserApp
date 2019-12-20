import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private usersUrl = 'http://localhost:8080/Controller?action=Users';
  private updateUserUrl = 'http://localhost:8080/Controller?action=UpdateUser';

  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  updatePerson(email, firstName, lastName, gender, age): void {
    const url = this.updateUserUrl + '&email=' + email
      + '&firstName=' + firstName + '&lastName=' + lastName + '&gender=' + gender + '&age=' + age;
    this.http.post(url, null).subscribe(res => {
      console.log('post working');
    }, err => {
      console.log('post error');
    });
  }
}
