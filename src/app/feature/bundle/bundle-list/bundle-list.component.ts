import {Component, OnDestroy, OnInit} from '@angular/core';
import {BundleService} from "../../../service/bundle.service";
import {CoinBundleDTO} from "../../../dto/CoinBundleDTO";

@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styleUrls: ['./bundle-list.component.css']
})
export class BundleListComponent implements OnInit,OnDestroy {
  coinBundles:any[]=[];
  private subscribe:any;
  jsonCoinBundle;

  constructor(private bundleService:BundleService) { }

  ngOnInit() {
    console.log('BundleListComponent:ngOnInit');
    this.getCoinBundles();
  }

  public onSubmit(){
  }

  public getCoinBundles(){
    this.subscribe=this.bundleService.getAllCoinBundle().subscribe((data)=>{
      if(data['sucs'])
        this.coinBundles=data['coinBundle'];
    });
  }

  ngOnDestroy(){
    console.log('BundleListComponent:ngOnDestroy');
    this.subscribe.unsubscribe();
  }

}
