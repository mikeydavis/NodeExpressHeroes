import { Component } from '@angular/core';
import { HeroService } from './hero.service'
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NodeExpress';

  heroes = new Array<Hero>();

  constructor(heroSevice: HeroService){

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
