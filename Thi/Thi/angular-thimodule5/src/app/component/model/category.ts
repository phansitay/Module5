import {Product} from "./product";

export interface Category {
  id?: string
  product: Product
  quantity?:number
  dateBegin?: string
  dateBody?:string
  dateEnd?: string


}
