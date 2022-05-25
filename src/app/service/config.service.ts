import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url: string = "";

  constructor(private http: HttpClient) { } 

  createArticle(userData:any): Observable<any> {
    console.log(userData);
    return this.http.post(this.url, userData);
  } 

}
