export class BookDTO {
  constructor(id, title, author, image, available, tags = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.image = image;
    this.available = available;
    this.tags = tags;
  }
}
