import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor( private _httpClient:HttpClient) { }

  getAccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1");
  }
  getFilteredAccounts(term:string):Observable<any>{
    return this._httpClient.get( "https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  getPagedAccounts(page:number):Observable<any>{
    return this._httpClient.get( "https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
  }
  getAccount(id:string):Observable<any>{
    return this._httpClient.get( "https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
  updateAccount(id:string,data:any):Observable<any>{
    return this._httpClient.put( "https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data);
  }
  createAccount(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }
}
