import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HeroService {
  apiURL: string = 'http://node.midax.co.uk/api/heroes';
  
  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<Hero[]>  {
    let x: number = 10
    let y: number = x + 1

    console.log(y)
    return this.http.get<Hero[]>(`${this.apiURL}`)
  }

}
