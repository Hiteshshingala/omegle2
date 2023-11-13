function generateRandomNumber(min, max) {
    // Math.random() generates a random floating-point number in the range [0, 1)
    // Multiply it by the range and add the minimum to get a random number in [min, max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rooms = [];

const createRooms = (userId) => {
    const newRoom = {
        roomId: `${Date.now()}-${generateRandomNumber(1,100000000000)}`,
        isAvailable: true,
        occupants: 0, 
        joinRoom: function() {
            if (this.occupants < 2) {
              this.occupants++;
              if (this.occupants === 2) {
                this.isAvailable = false; // Room is now unavailable
              }
              console.log(`User joined room ${this.roomId}`);
            } else {
              console.log(`Room ${this.roomId} is full.`);
            }
        },
        leaveRoom: function() {
            if (this.occupants > 0) {
                this.occupants--;
              if (this.occupants < 2) {
                this.isAvailable = true; // Room is now unavailable
            }
              console.log(`User joined room ${this.roomId}`);
            } else {
              console.log(`Room ${this.roomId} is full.`);
            }
        },
    };
    rooms.push(newRoom);
    return newRoom;
}

const getAvailableRoom = async () => {
    let availRooms = rooms.filter(obj => obj.isAvailable === true);
    const instantAvailRooms = availRooms.filter(obj => obj.occupants === 1);
    if(instantAvailRooms && instantAvailRooms.length > 0) {
        availRooms = instantAvailRooms;
    }
    const random = Math.floor(Math.random() * availRooms.length);
    if(availRooms && availRooms.length > 0){
        return availRooms[random]
    } else {
        const newRoom = await createRooms();
        return newRoom;
    }
}


const updateRoom = (id, config) => {
    const availRoomsIndex = rooms.findIndex(obj => obj.roomId === id);
    if(availRoomsIndex > -1) {
        rooms[availRoomsIndex] = {
            ...rooms[availRoomsIndex],
            ...config
        }
    }
}

const joinRoom = (id) => {
    const availRoomsIndex = rooms.findIndex(obj => obj.roomId === id);
    if(availRoomsIndex > -1) {
        rooms[availRoomsIndex].joinRoom();
    }
}
const leaveRoom = (id) => {
    const availRoomsIndex = rooms.findIndex(obj => obj.roomId === id);
    if(availRoomsIndex > -1) {
        rooms[availRoomsIndex].leaveRoom();
    }
}

const deleteRooms = (roomId) => {
    rooms = rooms.filter(obj => obj.id !== objectIdToRemove);
}

module.exports = {getAvailableRoom, updateRoom, joinRoom, leaveRoom}