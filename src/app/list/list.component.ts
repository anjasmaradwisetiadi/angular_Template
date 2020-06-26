import { Component, OnInit } from '@angular/core';
import { dataJsonUpdate } from '../dataJson.service';
import { dataShares} from'../dataShare.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataUsers: dataShares;
  constructor(private dataJson: dataJsonUpdate) { }


  getColor(feature: number){
    return feature % 2 ? 'lightblue' :'salmon';
  }
  sendDetailData(){
    console.log("get data untuk detail");
    this.dataJson.getDetailData.emit(this.dataUsers);
  }
  ngOnInit() {
    return this.dataJson.getUser().
      subscribe(dataJson => this.dataUsers = dataJson);
  }
  // triggerData() {
  //   this.data.getConsole();
  // }

}
