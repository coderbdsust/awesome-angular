import { Component, OnInit } from '@angular/core';
import {BundleService} from "../../../service/bundle.service";
import {CoinBundleDTO} from "../../../dto/CoinBundleDTO";

@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styleUrls: ['./bundle-list.component.css']
})
export class BundleListComponent implements OnInit {
  coinBundles:any[]=[];
  jsonCoinBundle;

  constructor(private bundleService:BundleService) { }

  ngOnInit() {
    this.getCoinBundles();
  }

  public onSubmit(){
  }

  public getCoinBundles(){
    this.bundleService.getAllCoinBundle().subscribe((data)=>{
      if(data['sucs'])
        this.coinBundles=data['coinBundle'];
    });
  }

}
