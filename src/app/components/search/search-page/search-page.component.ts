import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../shared/models/movie';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

	movie: Movie;

  constructor(private movieService: MovieService, private route:ActivatedRoute) { 



  }

  ngOnInit() {
  	// ne ovako, moras imati observable!
  	// let term = parseInt(this.route.snapshot.paramMap.get('term'));
  	// this.movie = this.movieService.search(term);

  	// console.log(this.movie);

  	this.route.params.subscribe(params => {
      this.moviesService.searchMoviesByTerm(params['term'])
        .subscribe(foundMovies => {

        }, (term) => {
          alert('There are no movies with searched term: ' + term);

          this.router.navigate(['movies']);
        });
    });
  }

}
