import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



const endpoint = 'your-destination-url'; // URL to API;

// 
@Injectable()
export class FileUploadService {
    
    httpClient : HttpClient;
    
    constructor(httpClientArg: HttpClient) {
        this.httpClient = httpClientArg;
    }
    
    // Upload a file via POST-method. 
    postFile(fileToUpload: File): Observable<boolean> {
        
        const endpoint = 'your-destination-url';
        
        // Use FormData, so it is possible add a file to a HTTP request.
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        
        // Returns an Observable
        return this.httpClient
          .post( endpoint, formData, {headers: headers} )
          .map( () => { return true; } )
          .catch( (e) => this.handleError(e) );
    }
    
    handleError(e: HttpErrorResponse){
        console.log(e);
    }
    
    /*
    
    postFile(fileToUpload: File): Observable<File> {
    
    // Use FormData, so it is possible add a file to a HTTP request.
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    
    
    return this.httpClient
        .post(endpoint, formData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
        })
        .pipe(
            tap(item => this.log('Posted')),
            catchError(this.handleError('postFile', fileToUpload))
        );
  }
  */
  
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   /*
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');
      
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
      
  }*/
  
}