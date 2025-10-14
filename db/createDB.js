require('dotenv').config();
const { Client } = require('pg');

const SQL = `
  CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100),
    genre INTEGER,
    developer INTEGER
  );

  CREATE TABLE IF NOT EXISTS genres (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre VARCHAR (100)
  );

  CREATE TABLE IF NOT EXISTS developers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    developer VARCHAR (100)
  );

  INSERT INTO games (title, genre, developer) VALUES
    ('Quake', 1, 1),
    ('Quake II', 1, 1),
    ('Age of Empires II', 2, 2),
    ('Baldur''s Gate', 3, 3),
    ('MDK2', 4, 3),
    ('Neverwinter Nights', 3, 3),
    ('Mass Effect', 3, 3),
    ('Myst', 5, 4),
    ('Riven', 5, 4),
    ('Halo', 1, 5),
    ('Age of Wonders', 6, 6),
    ('Heroes of Might and Magic III', 6, 7);

  INSERT INTO genres (genre) VALUES
    ('First-person shooter'),
    ('Real-time strategy'),
    ('Role-playing'),
    ('Third-person shooter'),
    ('Puzzle'),
    ('Turn-based strategy');

  INSERT INTO developers (developer) VALUES
    ('id Software'),
    ('Ensemble Studios'),
    ('Bioware'),
    ('Cyan'),
    ('Bungie'),
    ('Triumph Studios'),
    ('New World Computing');
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();