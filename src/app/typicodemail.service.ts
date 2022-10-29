import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypicodemailService {

  constructor(private _httpClient:HttpClient) { }

  getTypicodes():Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }

}
