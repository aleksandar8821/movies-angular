import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class MovieService {

	private movies: Movie[] = [];

  constructor(private http: HttpClient) { }

  public getMovies(){
  	// return new Observable((o: Observer<any>) => {
  	// 	this.movies = movieList.map(x => new Movie(x.id, x.name, x.director, x.imageUrl, x.duration, x.releaseDate, x.genres) );
  	// 	o.next(this.movies);
  	// });

    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/movies')
        .subscribe(
          (movies: any[]) => {
            movies.forEach(m => {
              this.movies.push(new Movie(m.id, m.name, m.director, m.imageUrl, m.duration, m.releaseDate, m.genres));
            });

            o.next(this.movies);
            return o.complete();

          }
        );
    });



  }

  public addMovie(newMovie: Movie){
    console.log(newMovie);
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/movies', {
        'name': newMovie.name,
        'director': newMovie.director,
        'imageUrl': newMovie.imageUrl,
        'duration': newMovie.duration,
        'releaseDate': newMovie.releaseDate,
        'genres': newMovie.genres
        
      })
        .subscribe(
          (m: any) => {
            let newM = new Movie(m.id, m.name, m.director, m.image_url, m.duration, m.release_date, m.genres);
            this.movies.push(newM);
            o.next(this.movies);
            return o.complete();
          },
          
          (err: HttpErrorResponse)=>{
            alert(`Backend returned code ${err.status} with message: ${err.error}`);
          }

        );
    });
  }

  public search(term){

    // let movie: Movie;
    // return new Observable((o: Observer<any>) => {
      
    //   movie = movieList.find( movie => {
    //      return movie['name'] == term;


    //   });
    
    //   o.next(movie);
      
    //   // if(!movie){
    //   //   o.throw(term);
    //   // }
    // });

  }

}


