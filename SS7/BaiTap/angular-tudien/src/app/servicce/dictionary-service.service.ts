import { Injectable } from '@angular/core';
import {Iword} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  private _iwords: Iword[]=[
    {
      word: "hello",
      mean: "xin chào"
    },
    {
      word: "school",
      mean: "trường học"
    },
    {
      word: "phone",
      mean: "điện thoại"
    },
    {
      word: "address",
      mean: "địa chỉ"
    },
    {
      word: "name",
      mean: "tên"
    },
    {
      word: "chicken",
      mean: "con gà"
    },
    {
      word: "dog",
      mean: "con chó"
    },
    {
      word: "cat",
      mean: "con mèo"
    },
    {
      word: "class",
      mean: "lớp"
    },
    {
      word: "goodbye",
      mean: "tạm biệt"
    },
  ]
  constructor() { }


  get iwords(): Iword[] {
    return this._iwords;
  }

  set iwords(value: Iword[]) {
    this._iwords = value;
  }
}
