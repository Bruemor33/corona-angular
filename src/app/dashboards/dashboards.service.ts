import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    this.http.get('https://coronavirus-tracker-api.herokuapp.com');
  }
}
