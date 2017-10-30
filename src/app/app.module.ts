import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared/shared.module';
import { SearchModule } from './shared/search/search.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    AddMovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
