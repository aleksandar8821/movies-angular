import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


import { SearchComponent } from '../../components/search/search.component';
import { SearchInputComponent } from '../../components/search/search-input/search-input.component';
import { SearchPageComponent } from '../../components/search/search-page/search-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [SearchComponent, SearchInputComponent, SearchPageComponent],
  exports: [SearchComponent, SearchInputComponent, SearchPageComponent]
})
export class SearchModule { }
