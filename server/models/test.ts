import {Observable} from 'rxjs/Observable';
import {Transaction} from '../helpers/transaction';
import {Db, ResultSet} from '../helpers/db';



export function createAll(body, transaction?: Transaction): Observable<any> {


  return Observable.create(observer => {
    Db.query(body[0],[], transaction).subscribe(
      (data: ResultSet) => {
        observer.next(data.rows);
        observer.complete();
      },
      err => {
        observer.error(err);
        observer.complete();
      }
    );
  });
}



export function getUser(transaction?: Transaction): Observable<any> {
  return Observable.create(observer => {
    Db.query('SELECT * FROM users', [], transaction).subscribe(
      (data: ResultSet) => {
        observer.next(data.rows);
        observer.complete();
      },
      err => {
        observer.error(err);
        observer.complete();
      }
    );
  });
}

export function getOrderItems(transaction?: Transaction): Observable<any> {
  return Observable.create(observer => {
    Db.query('SELECT * FROM order_items', [], transaction).subscribe(
      (data: ResultSet) => {
        observer.next(data.rows);
        observer.complete();
      },
      err => {
        observer.error(err);
        observer.complete();
      }
    );
  });
}


export function getOrders(transaction?: Transaction): Observable<any> {
  return Observable.create(observer => {
    Db.query('SELECT * FROM orders', [], transaction).subscribe(
      (data: ResultSet) => {
        observer.next(data.rows);
        observer.complete();
      },
      err => {
        observer.error(err);
        observer.complete();
      }
    );
  });
}

export function getCustomers(transaction?: Transaction): Observable<any> {
  return Observable.create(observer => {
    Db.query('SELECT * FROM customers', [], transaction).subscribe(
      (data: ResultSet) => {
        observer.next(data.rows);
        observer.complete();
      },
      err => {
        observer.error(err);
        observer.complete();
      }
    );
  });
}


