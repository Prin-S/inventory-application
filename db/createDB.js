require('dotenv').config();
const { Client } = require('pg');

const SQL = `
  CREATE TABLE IF NOT EXISTS genres (
    genre_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre VARCHAR (100)
  );

  CREATE TABLE IF NOT EXISTS developers (
    developer_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    developer VARCHAR (100)
  );

  CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100),
    genre_id INTEGER REFERENCES genres,
    developer_id INTEGER REFERENCES developers
  );

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
  
  INSERT INTO games (title, genre_id, developer_id) VALUES
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