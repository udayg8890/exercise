import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})



export class ViewComponent implements OnInit {
  tableData:any;
  reverse: boolean;
  key: any = '';
  constructor(private apiService:ApiService) { 
    apiService.getUsers().subscribe(data=>{
      this.tableData = data;
        });
  }

sorting(key){
  this.key = key;
  this.reverse = !this.reverse;
}

  ngOnInit() {
  }

}
