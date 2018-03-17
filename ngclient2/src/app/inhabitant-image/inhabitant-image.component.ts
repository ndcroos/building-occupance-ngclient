import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inhabitant-image',
  templateUrl: './inhabitant-image.component.html',
  styleUrls: ['./inhabitant-image.component.scss']
})
export class InhabitantImageComponent implements OnInit {
    
    @Input() room: Room;
    @HostBinding('attr.class') cssClass = 'ui small image';
    
  constructor() { }

  ngOnInit() {
  }

}
