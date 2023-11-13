function generateRandomNumber(min, max) {
    // Math.random() generates a random floating-point number in the range [0, 1)
    // Multiply it by the range and add the minimum to get a random number in [min, max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rooms = [{
    roomId: `${Date.now()}-${generateRandomNumber(1,100000000000)}`,
    userId: `uid-${Date.now()}-${generateRandomNumber(1,100000000000)}`,
    

}]

const createRooms = (userId) => {
    rooms.push({
        roomId: `${Date.now()}-${generateRandomNumber(1,100000000000)}`,
        userId
    });
}

const deleteRooms = (roomId) => {
    rooms = rooms.filter(obj => obj.id !== objectIdToRemove);
}