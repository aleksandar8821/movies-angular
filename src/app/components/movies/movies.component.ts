import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovies: Movie[] = [];
	selectedMoviesNumber: number;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	this.movieService.getMovies().subscribe(

  		data => {
  			this.movies = data;
        console.log(this.movies);
  		}


  	)
  }

  public addSelectedMovie(movie){
    this.selectedMovies.push(movie);
    this.selectedMoviesNumber = this.selectedMovies.length;
  }

}
