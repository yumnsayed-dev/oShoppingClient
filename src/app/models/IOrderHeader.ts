import { OrderDetail } from "./IOrderDetail";

export interface OrderHeader {
    saleId: number;
    orderDate: string;
    requestDate: string;
    dueDate: string;
    orderStatus: string;
    customerId: number;
    customerName: string;
    taxVal: number;
    taxName: string;
    orderDiscountVal: number;
    orderNetVal: number;
    orderTotalVal: number;
    orderDetails: OrderDetail[];
  }
  
 