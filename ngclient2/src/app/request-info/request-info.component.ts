import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.scss']
})
export class RequestInfoComponent implements OnInit {
  data: Object;
  loading: boolean;
  constructor(private http: Http) { 
  
  }

  ngOnInit() {
  }
  
  makeRequest(): void {
      this.loading = true;
      this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        .subscribe((res: Response) => {
          this.data = res.json();
          this.loading = false;
      });
  }
  
  makePost(): void {
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
       JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
    }))
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}
