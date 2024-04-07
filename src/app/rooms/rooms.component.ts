import { Component } from '@angular/core';
import { Room, RoomDetails } from '../../types.g';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName = 'Vegeta';
  numOfRooms = 10;
  hideRooms = false;

  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  rooms: RoomDetails[] = [
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

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
