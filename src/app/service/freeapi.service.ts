import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
@Injectable( {
  
  providedIn: 'root'
})

export class freeApiService{
  constructor(private http : HttpClient ){ }
  // declaring a get method request
//   getcomments (): Observable <any> {
// return this.http.get( `https://api.openbrewerydb.org/breweries`);
//   }
 getList () {
    return this.http.get( `https://jsonplaceholder.typicode.com/posts/1/comments`);
  }
 }