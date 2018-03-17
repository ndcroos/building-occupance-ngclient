import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

// 
@Injectable()
export class FileUploadService {

  constructor() { }
  
  // Upload a file via POST-method. 
  postFile(fileToUpload: File): Observable<boolean> {
    
    // My REST-endpoint.
    const endpoint = 'your-destination-url';
    
    // Use FormData, so it is possible add a file to a HTTP request.
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    
    // Returns an Observable
    return this.httpClient
      .post(endpoint, formData, { headers: yourHeadersConfig })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
  }

}
