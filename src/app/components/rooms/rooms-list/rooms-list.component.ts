import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomDetails } from '../../../../types.g';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {
  @Input() rooms: RoomDetails[] = []
  @Output() selectedRoom = new EventEmitter<RoomDetails>();

  chooseRoom(room: RoomDetails) {
    this.selectedRoom.emit(room);
  }
}
