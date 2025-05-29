export class FilialDTO {
  constructor(id, name, address, hours, open, image, description = "", events = []) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.hours = hours;
    this.open = open;
    this.image = image;
    this.description = description;
    this.events = events;
  }
}
