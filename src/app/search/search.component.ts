import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchedText: string = ""

  @Output()
  SearchTextTyped : EventEmitter<string> = new EventEmitter<string>();


  onSearchTextTyped(){
    this.SearchTextTyped.emit(this.searchedText);
  }
  

}
