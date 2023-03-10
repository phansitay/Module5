import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[] = [
    {
      id: 1,
      name: 'Iphone 13 promax',
      price: 120000,
      description: '99%'
    },
    {
      id: 2,
      name: 'Iphone 14',
      price: 230000,
      description: '99%'
    },
    {
      id: 3,
      name: 'Iphone x',
      price: 80000,
      description: '90%'
    },
    {
      id: 4,
      name: 'Iphone 11',
      price: 90000,
      description: '98%'
    },
    {
      id: 5,
      name: 'Iphone 14 promax',
      price: 300000,
      description: 'new'
    }
  ];
  constructor() { }

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }
  save(product: FormGroup){
    // @ts-ignore
    this._products.push(product);
  }
  getProductById(id: number){
    return this._products[id-1];
  }
  update(id: number,product: Product){
    for (let i=0;i<this._products.length;i++){
      if (this._products[i].id == id){
        this._products[i]=product;
      }
    }
  }
  delete(id: number){
    this._products=this._products.filter(product =>
    {
      return product.id !== id;
    })
  }

}
