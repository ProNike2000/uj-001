import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SimBox } from '../navigation/SimBox';

@Injectable({
  providedIn: 'root'
})
export class SimBoxListService {

  constructor(private http: HttpClient) { }

  getSimBoxsList() {
    return this.http.get(`${environment.apiUrl}/simbox`)
                .toPromise()
                .then(res => res as SimBox[])
                .then(data => {
                  console.log(data);
                  return data; });
}
}
