import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inhabitant-name-display',
  templateUrl: './inhabitant-name-display.component.html',
  styleUrls: ['./inhabitant-name-display.component.scss']
})
export class InhabitantNameDisplayComponent implements OnInit {
    
    @Input() name: string;
    
  constructor() { }

  ngOnInit() {
  }

}
