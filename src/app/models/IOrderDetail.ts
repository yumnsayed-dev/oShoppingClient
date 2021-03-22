 export interface OrderDetail {
    detailId: number;
    saleId: number;
    productName: string;
    productId: number;
    unitOfMeasureId: number;
    unitOfMeasureName: string;
    taxName: string;
    taxVal: number;
    productPrice: number;
    afterSalePrice: number;
    disccountVal: number;
    purchasedQuantity: number;
  }