import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

	searchTerm: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchMovies(searchTerm: string){
  	
  	this.router.navigate(['search/' + searchTerm]);
  }



}
