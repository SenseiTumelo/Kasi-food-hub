import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users_url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  public getUsers()
  {
    return this.http.get<any>(this.users_url);
  }
}
