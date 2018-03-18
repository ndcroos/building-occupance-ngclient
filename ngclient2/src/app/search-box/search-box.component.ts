import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Note: implementing OnInit.
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
    
    // Emits a boolean when loading.
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    // Emits array of searchresults when search is finished.
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
    
    // 
    constructor(private youtube: InhabitantSearchService, private el: ElementRef) {
        // convert the `keyup` event into an observable stream
        Observable.fromEvent(this.el.nativeElement, 'keyup')
        .map((e: any) => e.target.value) // extract the value of the input
        .filter((text: string) => text.length > 1) // filter out if empty
        .debounceTime(250) // only once every 250ms
        .do(() => this.loading.emit(true)) // enable loading
        // search, discarding old events if new input comes in
        .map((query: string) => this.youtube.search(query))
        .switch()
        // act on the return of the search
        .subscribe(
        (results: SearchResult[]) => { // on sucesss
        this.loading.emit(false);
        this.results.emit(results);
        },
        (err: any) => { // on error
        console.log(err);
        this.loading.emit(false);
        },
        () => { // on completion
        this.loading.emit(false);
     });
        
    }
    
    // Will be called after the first detection of change.
    // ngOninit does initialization.
    ngOnInit() {
    }

}
