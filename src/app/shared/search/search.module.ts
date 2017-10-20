import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


import { SearchComponent } from '../../components/search/search.component';
import { SearchInputComponent } from '../../components/search/search-input/search-input.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [SearchComponent, SearchInputComponent],
  exports: [SearchComponent, SearchInputComponent]
})
export class SearchModule { }
