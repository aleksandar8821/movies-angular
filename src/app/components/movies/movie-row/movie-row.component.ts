import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

	@Input()
	movieRow: Movie;

  constructor() { }

  ngOnInit() {
  }

  /*$ git add .
	warning: LF will be replaced by CRLF in src/app/components/movies/movie-row/movie-row.component.spec.ts.
	The file will have its original line endings in your working directory.
*/

}
