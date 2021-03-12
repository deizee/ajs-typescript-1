import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(
  1,
  'Мстители',
  'The Avengers',
  true,
  'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/afab999b-c6bb-4fac-a951-03f72fd2b8cf/300x450',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фентези', 'приключения'],
  137,
  300,
));

console.log(cart.items);
