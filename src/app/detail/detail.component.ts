import { Component, OnInit } from '@angular/core';
import { dataShares } from '../dataShare.model';
import { dataJsonUpdate } from '../dataJson.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailDatas: dataShares;
  constructor(private dataJson:dataJsonUpdate) { }

  ngOnInit() {
    return this.dataJson.getDetailData
    .subscribe(
      detail=>this.detailDatas = detail);
    
  }

}
