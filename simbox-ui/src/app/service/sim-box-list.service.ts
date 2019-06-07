import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SimBox } from '../navigation/SimBox';

@Injectable({
  providedIn: 'root'
})
export class SimBoxListService {

  constructor(private http: HttpClient) { }

  /* checktokeStatus(){
    if (localStorage.getItem("authtoken")) {
      return true;
    }
    return false;
  }

  if (checktokeStatus() == true) {
    let token = localStorage.getItem("authtoken");
  } */
  //this.router.navigate();
  httpOptions = {
    headers: new HttpHeaders({
      'token':  localStorage.getItem("authtoken")
    })
  };

getSimBoxsList() {
    return this.http.get(`${environment.apiUrl}/simbox`) //,{headers: new HttpHeaders().set('Auth token',localStorage.getItem("authtoken"))}
                .toPromise()
                .then(res => res as SimBox[])
                .then(data => {
                  console.log(data);
                  return data; });
}
}
