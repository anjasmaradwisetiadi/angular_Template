import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { dataJsonUpdate } from '../dataJson.service';
import { dataShares } from '../dataShare.model';

@Component({
  selector: 'app-detail-on',
  templateUrl: './detail-on.component.html',
  styleUrls: ['./detail-on.component.css']
})
export class DetailOnComponent implements OnInit {
  public departmentId;
  dataUsers: dataShares;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dataJson: dataJsonUpdate) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })

    this.dataJson.getUser().
      subscribe(data => this.dataUsers = data);


  }
  Back(){
    let previous=this.departmentId-1;
    this.router.navigate(['/List',previous]);
  }
  Next(){
    let next = this.departmentId + 1;
    this.router.navigate(['/List', next]);
  }

}
