import { Injectable } from '@angular/core';
import { RoomDetails } from '../../types.g';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  getRooms(): RoomDetails[] {
    return [
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
}
