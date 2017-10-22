import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

	// @Input()
	// movieRow: Movie;

  private movie: Movie;
  private selected: boolean;

  @Input()
  set movieRow(movie: Movie){
    this.movie = movie;
  }

  @Output() selectedOutput = new EventEmitter();

  constructor() { 
      this.selected = false;

   }

  ngOnInit() {
  }

  selectMovie(movie){
    this.selectedOutput.emit(movie);
    this.selected = true;
  }

}
