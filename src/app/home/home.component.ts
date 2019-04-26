import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TopHeros: Object;
  constructor(private data: HeroService) { }

  ngOnInit() {
    this.data.getHeroes();
  }

  getHeroes(){
    this.data.getHeroes().subscribe( data => {
      this.TopHeros = data;
      console.log(this.TopHeros)
    })
  }

}
