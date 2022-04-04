import { Component } from '@angular/core';
import {urldata} from "./urldata.model";
import {ApicrudserviceService} from "./apicrudservice.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awsapicrud';
  datas : urldata[]=[]
  constructor(private urlservice : ApicrudserviceService){
    this.getdata();
  }
  ngOnInit() {}
  getdata(){
    this.urlservice.geturldata().subscribe(result=>{
      this.datas=result;
    })
  }
}
