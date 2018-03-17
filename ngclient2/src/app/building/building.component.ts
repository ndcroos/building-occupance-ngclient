import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Room } from '../room'


/**
* @Building: A component for rendering all Rooms in a building.
*
*/
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  

  ngOnInit() {
  }
  
  
  /**
  * @input RoomList - the Room[] passed to us
  */
  @Input() roomList: Room[];
  /**
  * @output onRoomSelected - outputs the current
  * Room whenever a new Room is selected
  */
  @Output() onRoomSelected: EventEmitter<Room>;
  
  private currentRoom: Room;
  
  constructor() { 
    this.onRoomSelected = new EventEmitter();
  }
  
  
  clicked(room: Room): void {
    this.currentRoom = room;
    // Emit room that was clicked on.
    this.onRoomSelected.emit(room);
  }
  
  isSelected(room: Room): boolean {
      if (!room || !this.currentRoom) {
          return false;
      }
    return room.sku === this.currentRoom.sku;
  }
  
}
