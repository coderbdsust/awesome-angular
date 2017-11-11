import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {CoinBundleDTO} from "../dto/CoinBundleDTO";
import {environment} from "../../environments/environment";
import "rxjs/Rx";

@Injectable()
export class BundleService {

  constructor(private http:Http) { }

  public getAllCoinBundle(){
    let API_COIN_BUNDLE=environment.COIN_API_SERVER+'api/coinbundle/getcoinbundle?bundleTypeId=1&paymentMethodTypeId=1';
    console.log(API_COIN_BUNDLE);
    return this.http.get(API_COIN_BUNDLE).map((res:Response)=>res.json());
  }

  public add(coinBundle:CoinBundleDTO){
    let API_COIN_BUNDLE=environment.COIN_API_SERVER+'api/coinbundle/getcoinbundle?bundleTypeId=1&paymentMethodTypeId=1';
    console.log(API_COIN_BUNDLE);
    return this.http.get(API_COIN_BUNDLE).map((res:Response)=>res.json());
  }

  public edit(coinBundle:CoinBundleDTO){
    let API_COIN_BUNDLE=environment.COIN_API_SERVER+'api/coinbundle/getcoinbundle?bundleTypeId=1&paymentMethodTypeId=1';
    console.log(API_COIN_BUNDLE);
    return this.http.get(API_COIN_BUNDLE).map((res:Response)=>res.json());
  }

  public delete(coinBundle:CoinBundleDTO){
    let API_COIN_BUNDLE=environment.COIN_API_SERVER+'api/coinbundle/getcoinbundle?bundleTypeId=1&paymentMethodTypeId=1';
    console.log(API_COIN_BUNDLE);
    return this.http.get(API_COIN_BUNDLE).map((res:Response)=>res.json());
  }

}
