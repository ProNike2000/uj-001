import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MNO } from '../mno/MNO';

@Injectable({
  providedIn: 'root'
})
export class MnoListService {

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

getMnoList(id: string) {
    return this.http.get(`${environment.apiUrl}/mno-list?id='`+id+`'`) //?simbox_id=`+id {headers: new HttpHeaders().set('Auth token',localStorage.getItem("authtoken"))}
                .toPromise()
                .then(res => res as MNO[])
                .then(data => {
                  console.log(data);
                  return data; });
}
}
