import { Injectable } from 'angular2/core';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
    private movies:Array<Movie> = new Array<Movie>();
	constructor() {
        this.movies.push( new Movie("Top Gun") );
        this.movies.push( new Movie("Lord of the rings") );
        this.movies.push( new Movie("Avatar") );
	}

	getData():Movie[] {
        return this.movies;
	}
}