import { Injectable } from '@angular/core';
import {movieList} from '../example';
import { Observable, Observer } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

	private movies: Movie[] = [];

  constructor() { }

  public getMovies(){
  	return new Observable((o: Observer<any>) => {
  		this.movies = movieList.map(x => new Movie(x.id, x.name, x.director, x.imageUrl, x.duration, x.releaseDate, x.genres) );
  		o.next(this.movies);
  	});

  }

  public search(term){
  	return this.movies.find( movie => {
      return movie['name'] == term;
    })

  }

}
