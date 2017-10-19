import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	movies: Array<Object>

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	this.movieService.getMovies().subscribe(

  		data => {
  			this.movies = data;
  		}

  	)
  }

  

}
