import Book from '../domain/Book';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('должен корректно добавлять объект в корзину', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));  

  expect(cart).toEqual({
    _items: [
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
      }
    ]
  })
});
