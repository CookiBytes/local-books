const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Classics",
    movies: [
      { title: "Robin Hood", numberInStock: 1, dailyRentalRate: 5 },
      { title: "The Arabian Nights", numberInStock: 1, dailyRentalRate: 5 },
      { title: "Black Beauty", numberInStock: 1, dailyRentalRate: 5 },
      {
        title: "King Arthur & The Knights of the Round Table",
        numberInStock: 1,
        dailyRentalRate: 5,
      },
    ],
    // },
    // {
    //   name: "Genre #2",
    //   movies: [
    //     { title: "Book #4", numberInStock: 10, dailyRentalRate: 5 },
    //     { title: "Book #5", numberInStock: 10, dailyRentalRate: 5 },
    //     { title: "Book #6", numberInStock: 10, dailyRentalRate: 5 },
    //   ],
  },
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map((movie) => ({
      ...movie,
      genre: { _id: genreId, name: genre.name },
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
