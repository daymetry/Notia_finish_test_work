import {Router, Request, Response} from 'express';
import {CsrfMiddleware} from '../middlewares/csrf';
import {Tools} from '../helpers/tools';
import {Transaction} from '../helpers/transaction';
import * as Test from '../models/test';
import 'rxjs/add/operator/mergeMap';

const router: Router = Router();

// define '/api/test/*' routes here
router.get('/users', CsrfMiddleware, _getUsers);
router.get('/orderItems', CsrfMiddleware, _getOrderItems);
router.get('/orders', CsrfMiddleware, _getOrders);
router.get('/customers', CsrfMiddleware, _getCustomers);
router.post('/create', CsrfMiddleware, _create);

// define route-handlers here
function _create(req: Request, res: Response) {
  Test.createAll(res.req.body).subscribe(
    data => {
      Tools.sendJSON(res, true, data);
    },
    err => {
      Tools.sendJSON(res, false, err);
    }
  );
}
function _getUsers(req: Request, res: Response) {
  Test.getUser().subscribe(
    data => {
      Tools.sendJSON(res, true, data);
    },
    err => {
      Tools.sendJSON(res, false, err);
    }
  );
}

function _getOrderItems(req: Request, res: Response) {
  Test.getOrderItems().subscribe(
    data => {
      Tools.sendJSON(res, true, data);
    },
    err => {
      Tools.sendJSON(res, false, err);
    }
  );
}


function _getOrders(req: Request, res: Response) {
  Test.getOrders().subscribe(
    data => {
      Tools.sendJSON(res, true, data);
    },
    err => {
      Tools.sendJSON(res, false, err);
    }
  );
}
function _getCustomers(req: Request, res: Response) {
  Test.getCustomers().subscribe(
    data => {
      Tools.sendJSON(res, true, data);
    },
    err => {
      Tools.sendJSON(res, false, err);
    }
  );
}
// export router
export const TestController: Router = router;
