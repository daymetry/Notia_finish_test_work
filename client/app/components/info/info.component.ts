import {Component, OnInit, Directive, EventEmitter } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {APIResponse} from '../../interfaces/api-response.interface';
import * as moment from 'moment/moment';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: []
})



export class InfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private m_http: HttpClient) {
    setInterval(() => {
      this.myday = moment().format('dddd, DD MMM, HH:mm:ss')
    }, 1000);

  }

  get Route(): any {
    return this.route;
  }
  get M_http(): any {
    return this.m_http;
  }

  myday: string;
  nameUser: any;
  superUser: any;

  StartRequests(request)
  {
    this.M_http.post('/api/test/create', request, {}).subscribe(
      (data: APIResponse) => {
        this.nameUser = data.result[0].firstname + " " + data.result[0].lastname + " / ";
        this.superUser =  data.result[0].superuser;
      }, err => {
        console.error(err);
      }
    );
  }
  ngOnInit()  {
    let find_user = ["SELECT * FROM users WHERE ean='"+this.Route.snapshot.params['foo']+"'"]
    this.StartRequests(find_user)
  }



}

