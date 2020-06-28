import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataShares} from './dataShare.model';
@Injectable({
    providedIn:'root'
})

export class dataJsonUpdate {

    getUrl = 'https://jsonplaceholder.typicode.com/todos';
    getDetailData = new EventEmitter<dataShares>();
    
    constructor(private data_Url:HttpClient){

    }
    getUser(){ 
        return this.data_Url.get<dataShares>(this.getUrl);
    }
    getConsole(){
        console.log("ini data service");
    }
}