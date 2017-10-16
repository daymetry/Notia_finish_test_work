import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIResponse} from '../../interfaces/api-response.interface';


let users = [];

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})


export class LoginComponent implements OnInit {
  constructor(private m_http: HttpClient ) {}

  users = users;

  ngOnInit() {

    this.m_http.get('/api/test/users').subscribe(
      (data: APIResponse) => {
        if (users.length !== data.result.length)
        {
          for (let item of data.result) {
            users.push(item);
          }
        }
      }, err => {
        console.error(err);
      }
    );
  }

}
