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