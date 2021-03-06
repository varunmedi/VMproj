import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // getProductsInfo(){
  //   return  [
  //     {prodId:101, prodName:'samsung', price:30000, expiry: '12-5-2024', prodImage:'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'},
  //     {prodId:102, prodName:'oneplus', price:40000, expiry: '9-6-2024', prodImage:'https://cdn.dxomark.com/wp-content/uploads/medias/post-75824/oneplus9pro_1200px-1024x768.jpg'},
  //     {prodId:103, prodName:'apple', price:50000, expiry: '4-7-2025', prodImage:'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg'  }
  //   ]
  // }
  url:string='../assets/product.json'
  constructor(private http:HttpClient){}
  getProductsInfo(){
    return this.http.get(this.url)
  }
}
