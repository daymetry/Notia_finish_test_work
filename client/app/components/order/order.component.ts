import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIResponse} from '../../interfaces/api-response.interface';
import {ActivatedRoute, Params} from '@angular/router';
import * as moment from 'moment/moment';

@Component({
  moduleId: module.id,
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: []
})

export class OrderComponent {
  constructor(private route: ActivatedRoute, private m_http: HttpClient) {
  }

  get Route(): any {
    return this.route;
  }

  get M_http(): any {
    return this.m_http;
  }


  modal_window = true;
  filterViser: string;
  filterCode: string;
  filterName: string;
  find_orders: any = [];
  orders_item: any = [];
  order_id: any;
  company_name: any;
  superUser = false;
  superUserId: any;

  StartRequests(request) {
    this.M_http.post('/api/test/create', request, {}).subscribe(
      (data: APIResponse) => {

        if (data.result.length == 0)
        {
          this.order_id = '';
          this.company_name = '';
        }
        for (let item of data.result) {
          this.order_id = item.ean_order;
          this.company_name = item.firstname;
          item.infakts = Number(0);
          item.complided = false;
          this.orders_item.push(item);
        }
        this.filterName = '';

      }, err => {
        console.error(err);
      }
    );
  }


  FindOrders($event) {
    this.find_orders = ["SELECT orders.*, orders.ean AS ean_order, customers.*, order_items.* FROM orders LEFT JOIN customers ON customers.ean = orders.customer_ean LEFT JOIN order_items ON orders.ean = order_items.order_ean WHERE orders.ean = '" + $event.target.value + "' AND orders.state <> 'CLOSED' "];
    this.orders_item = [];
    this.StartRequests(this.find_orders)
  }

  StartCheckSuperviser(request) {
    this.M_http.post('/api/test/create', request, {}).subscribe(
      (data: APIResponse) => {

        if (data.result.length !== 0) {

          if (data.result[0].superuser == true) {
            this.superUser = data.result[0].superuser;
            this.superUserId = data.result[0].ean;
          }
        }
        this.filterViser = '';
      }, err => {
        console.error(err);
      }
    );
  }

  CheckSuperViser($event) {
    let find_super_user = ["SELECT * FROM users WHERE ean = '" + $event.target.value + "'"];
    this.StartCheckSuperviser(find_super_user)
  }

  EnterCodeItem($event) {
    let add_fackt: any = [];
    for (let item of this.orders_item) {
      if (item.code == $event.target.value && item.infakts < item.amount) {
        item.infakts++;
        if (item.infakts == item.amount) {
          item.complided = true;
        }
      }
      add_fackt.push(item)
    }
    this.filterCode = '';
    this.orders_item = add_fackt;
  }


  Save_order() {

    let check: boolean = true;

    for (let item of this.orders_item) {
      if (item.amount != item.infakts) {
        check = false
      }
    }

    if (check == true && this.orders_item.length !== 0) {
      this.modal_window = false;
      this.orders_item = [];

      let SaveRequest_items = ["UPDATE order_items SET packed_by = '"+this.Route.snapshot.params['foo']+"', date_packed= '"+moment().format('MM-DD-YYYY')+"' WHERE order_ean = '"+this.order_id+"'"];
      let SaveRequest_order = ["UPDATE orders SET state = 'CLOSED' WHERE ean = '"+this.order_id+"'"];
      this.StartSaveData(SaveRequest_items);
      this.StartSaveData(SaveRequest_order);

      this.order_id = '';
      this.superUserId = '';
      this.company_name = '';
      this.superUser = false;

      setTimeout(() => {
        this.modal_window = true;
      }, 2000);

    } else {
      if (this.superUser == true && this.orders_item.length !== 0) {

        this.orders_item = [];
        this.modal_window = false;

        let SaveRequest_items = ["UPDATE order_items SET packed_by = '"+this.Route.snapshot.params['foo']+"', date_packed= '"+moment().format('MM-DD-YYYY')+"' WHERE order_ean = '"+this.order_id+"'"];
        let SaveRequest_order = ["UPDATE orders SET state = 'CLOSED', changed_by = '"+this.superUserId+"', date_changed = '"+moment().format('MM-DD-YYYY')+"' WHERE ean = '"+this.order_id+"'"];
        this.StartSaveData(SaveRequest_items);
        this.StartSaveData(SaveRequest_order);

        this.order_id = '';
        this.superUser = false;
        this.superUserId = '';
        this.company_name = '';

        setTimeout(() => {
          this.modal_window = true;
        }, 2000);

      } else {


        this.superUser = false;
        this.superUserId = '';

        alert("Please complete the order");
      }
    }
  }

  StartSaveData(request) {
    this.M_http.post('/api/test/create', request, {}).subscribe(
      (data: APIResponse) => {
        console.log(data)
      }, err => {
        console.error(err);
      }
    );
  }

}
