import { Component, OnInit } from '@angular/core';
import { HeroService } from './../hero.service'
import { Hero } from './hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ngOnInit() {
  }

  title = 'NodeExpress'; 
  heroes = new Array<Hero>();
  heroMessage = '';

  onClickHeroes(heroSevice: HeroService){
    if (this.heroMessage == '')
      this.heroMessage = 'Thor is the strongest hero'
    else
      this.heroMessage = ''
  }

  constructor(private heroSevice: HeroService){
    this.getHeroes(heroSevice)
  }

  getHeroes(heroSevice){
          heroSevice.getHeroes().subscribe(response => {
          this.heroes = response.map(item => {
            return new Hero(
                item.id,
                item.name,
                item.saying
            );
          });
      });
  }

}
