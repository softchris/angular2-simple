import { Component,Input,Output, EventEmitter } from 'angular2/core';
import { Movie } from './movie.model';

@Component({
    selector : 'selected-movie',
    template : `
        <div style="border: solid 2px black; background:grey; padding: 10px; width: 50% ">
            <strong>Selected movie {{ movie.name }}</strong>
        </div>
        <button (click)="hi()" >Say hi to parent</button>
    `
})
export class MovieComponent {
    @Output() changed:EventEmitter<Movie> = new EventEmitter<Movie>();
    @Input() movie:Movie;
    
    constructor() {
        
    }
    
    hi() {
        console.log('saying hi to parent');
        this.changed.next(this.movie);
        //this.selected.emit(this.movie);
    }
}