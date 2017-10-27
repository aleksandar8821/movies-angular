import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { MovieRowComponent } from '../../components/movies/movie-row/movie-row.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [MovieService],
  declarations: [MovieRowComponent],
  exports: [MovieRowComponent]
})
export class SharedModule { }
