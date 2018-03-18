import { Component, OnInit } from '@angular/core';
import { SearchResult } from './search-result.component';

@Component({
  selector: 'app-inhabitant-search',
  templateUrl: './inhabitant-search.component.html',
  styleUrls: ['./inhabitant-search.component.scss']
})
export class InhabitantSearchComponent implements OnInit {
    
  results: SearchResult[];
  loading: boolean;
    
  constructor() { }

  ngOnInit() {
  }
  
  updateResults(results: SearchResult[]): void {
      this.results = results; // console.log("results:", this.results); // uncomment to take a look
  }

}
