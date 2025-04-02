const houseBlueprint = {
    address: " ",
    date: new Date(),
    description: " ",
    owner: " ",
    size: 0,
    getDaysToBuild(){
        return this.size / this._building_speed
    } 
}
function houseBuilder(address, description, owner, size, rooms){
    this.address = address
    this.date = new Date()
    this.description = description
    this.owner = owner
    this.size = size
    this.roomCount = rooms
}
Object.assign(houseBuilder.prototype, houseBlueprint);
houseBuilder.prototype._building_speed = 0.5;

// const house = new houseBuilder('88 Crescent Avenue',
//     'Spacious town house with wood flooring, 2-car garage, and a back patio.',
//     'J. Smith',
//     110, 
//     5);
//     console.log(house.address);
//    // '88 Crescent Avenue'
//     console.log(house.description);
//    // 'Spacious town house with wood flooring, 2-car garage, and a back patio.'
//     console.log(house.size);
//    // 110
//     console.log(house.date.toDateString());
//    // [the current date], for example: 'Tue Aug 11 2020'
//     console.log(house.owner);
//    // J. Smith
//     console.log(house._building_speed);
//    // 0.5
//     console.log(house.getDaysToBuild());
//    // 220
//     console.log(house.roomCount);
//    // 5
