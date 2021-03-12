import Movie from '../domain/Movie';

test('Должен корректно создавать объект класса', () => {
  const movie = new Movie(
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
  );
  const reseived = {
    country: "США",
    genre: ["фантастика", "боевик", "фентези", "приключения"],
    id: 1,
    isIMAX: true,
    name: "Мстители",
    originalName: "The Avengers",
    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/afab999b-c6bb-4fac-a951-03f72fd2b8cf/300x450",
    price: 300,
    tagline: "Avengers Assemble!",
    timelineInMin: 137,
    year: 2012,
  };

  expect(movie).toEqual(reseived)
})