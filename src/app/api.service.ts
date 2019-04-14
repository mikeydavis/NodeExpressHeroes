import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://node.midax.co.uk/api/heroes';
  constructor(private httpClient: HttpClient) { }

  public getHeroes(){
    return this.httpClient.get<Hero[]>(`${this.apiURL}`);
  }

}
