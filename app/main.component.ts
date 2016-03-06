import { Component } from 'angular2/core';
import { MoviesComponent } from './features/movies/movies.component';
import { MenuComponent } from './features/shared/menu.component';

@Component({
  selector: 'main-component',
  template: `
    <menu></menu>
    <movies></movies>
  `,
  directives : [ MoviesComponent, MenuComponent ]
})
export class MainComponent {
 
}




