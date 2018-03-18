import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { SearchResult } from './search-result/search-result.component';

let SERVER_API_URL: string = "TODO";

@Injectable()
export class InhabitantSearchService {

    constructor(private http: Http, @Inject(SERVER_API_URL) private apiUrl: string){
    }
  
    search(query: string): Observable<SearchResult[]> {
        const params: string = ["q=${query}"].join('&');
 const queryUrl = '${this.apiUrl}?${params}';
 return this.http.get(queryUrl)
 .map((response: Response) => {
 return (<any>response.json()).items.map(item => {
 // console.log("raw item", item); // uncomment if you want to debug
 return new SearchResult({
 id: item.id.videoId,
 title: item.snippet.title,
 description: item.snippet.description,
 thumbnailUrl: item.snippet.thumbnails.high.url
 });
 });
 });
 }
}