import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http:Http){
    console.log("posts initialization");
}

getUsers(){
    return this.http.get('http://localhost:8080/users').map(res => res.json());
}
}
