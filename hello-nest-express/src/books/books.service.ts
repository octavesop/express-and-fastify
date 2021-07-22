import { Injectable } from '@nestjs/common';
const BOOKS_DATA = require("./data.json");

@Injectable()
export class BooksService {
  findAll() {
    return BOOKS_DATA;
  }

  findOne() {
    return BOOKS_DATA;
  }
}
