import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomDetails } from '../../../types.g';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName: string = '';
  numOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomDetails;

  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  rooms: RoomDetails[] = []

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  constructor(private roomService: RoomsService) {}

  ngOnInit() {
    this.hotelName = 'Vegeta Hotel'
    this.rooms = this.roomService.getRooms();
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }

  chooseRoom(room: RoomDetails) {
    this.selectedRoom = room;
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
