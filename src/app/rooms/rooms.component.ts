import { Component, OnInit } from '@angular/core';
import { Room, RoomDetails } from '../../types.g';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {
    this.hotelName = 'Vegeta Hotel'

    this.rooms = [
      {
        id: 8,
        name: 'Delux AC Room',
        description: 'best room ever',
        price: 100,
        checkinTime: new Date(),
      },
      {
        id: 2,
        name: 'Standard AC Room',
        description: 'Good room. Well maintained.',
        price: 70,
        checkinTime: new Date(),
      },
      {
        id: 4,
        name: '1 RK Room',
        description: 'Ok room. Suits all your needs.',
        price: 35,
        checkinTime: new Date(),
      }
    ]
  }

  chooseRoom(room: RoomDetails) {
    this.selectedRoom = room;
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
