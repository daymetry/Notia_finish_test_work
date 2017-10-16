import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';
import {APIResponse} from '../../interfaces/api-response.interface';



let users = [];
let orders = [];
let order_items = [];
let customers = [];


@Component({
  moduleId: module.id,
  selector: 'base_look',
  templateUrl: './base_look.component.html',
  styleUrls: ['./base_look.component.css'],
  providers: []
})
export class Base_look implements OnInit {
  constructor(private m_http: HttpClient ) {}
  users = users;
  orders = orders;
  order_items = order_items;
  customers = customers;

  // ConocoPhillips

  // all_requests = ["INSERT INTO order_items (ean, order_ean, code, amount, name) VALUES ('55', '333', 'VFI-1434139/2017', '3', 'Lenovo K5 Note Gold')"]
  ngOnInit() {
     // this.m_http.post('/api/test/create', this.all_requests, {}).subscribe(
     //   (data: APIResponse) => {
     //     console.log(data)
     //  }, err => {
     //     console.error(err);
     //  }
     // );

    // this.m_http.get('/api/test/users').subscribe(
    //   (data: APIResponse) => {
    //     console.log(data)
    //     for (let item of data.result) {
    //       users.push(item);
    //     }
    //   }, err => {
    //     console.error(err);
    //   }
    // );
    // this.m_http.get('/api/test/orders').subscribe(
    //   (data: APIResponse) => {
    //     console.log(data)
    //     for (let item of data.result) {
    //       orders.push(item);
    //     }
    //   }, err => {
    //     console.error(err);
    //   }
    // );
    this.m_http.get('/api/test/orderItems').subscribe(
      (data: APIResponse) => {
        console.log(data)
        for (let item of data.result) {
          order_items.push(item);
        }
      }, err => {
        console.error(err);
      }
    );

    // this.m_http.get('/api/test/customers').subscribe(
    //   (data: APIResponse) => {
    //     console.log(data)
    //     for (let item of data.result) {
    //       customers.push(item);
    //     }
    //   }, err => {
    //     console.error(err);
    //   }
    // );

  }

}
