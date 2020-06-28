import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { dataJsonUpdate } from '../dataJson.service';
import { dataShares} from'../dataShare.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<any>();
  dataUsers: dataShares;

  constructor(
    private router: Router,
    private dataJson: dataJsonUpdate) { }



  ngOnInit() {
    return this.dataJson.getUser(). 
      subscribe(data => this.dataUsers = data);
  }

  getColor(feature: number) {
    return feature % 2 ? 'lightblue' : 'salmon';
  }

  sendDetailData(dataUsers) {
    this.router.navigate(['/List',dataUsers.id]);
    console.log("get data untuk detail" + this.dataUsers );
    this.dataJson.getDetailData.emit(this.dataUsers);
    
  }
  // triggerData() {
  //   this.data.getConsole();
  // }

}
