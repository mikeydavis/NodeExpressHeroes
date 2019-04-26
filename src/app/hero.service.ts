import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero/hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HeroService {
  apiURL: string = 'http://node.midax.co.uk/api/heroes';
  
  constructor(private http: HttpClient) { }

  getMyHeros(){
    return this.http.get(this.apiURL)
  }

  public getHeroes(): Observable<Hero[]>  {
    return this.http.get<Hero[]>(`${this.apiURL}`)
  }
}
