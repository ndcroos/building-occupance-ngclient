import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-room-row',
  templateUrl: './room-row.component.html',
  styleUrls: ['./room-row.component.scss']
})
export class RoomRowComponent implements OnInit {
    
    @Input() room: Room;
    
    // Setting attributes on the host element.
    @HostBinding('attr.class') cssClass = 'item';
    
  constructor() { }

  ngOnInit() {
  }

}
