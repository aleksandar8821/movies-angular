import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

	private newMovie: Movie = new Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  addMovie(newMovie: Movie){
  	this.movieService.addMovie(newMovie);
  }

}
