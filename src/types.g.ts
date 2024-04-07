export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomDetails {
  id: number;
  name: string;
  price: number;
  description: string;
  checkinTime: Date;
}
