const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  // host: "localhost",
  host: "music.caemfhowmnku.us-east-2.rds.amazonaws.com",
  database: "music",
  password: "postgres",
  port: 5432,
});

const getSongs = (request, response) => {
  console.log('getting songs')
  pool.query("SELECT * FROM songs", (error, results) => {
    
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addSongs = (request, response) => {
  const { song_name, downloads } = request.body;
  pool.query(
    `INSERT INTO songs (song_name, downloads) VALUES ($1, $2)`,
    [song_name, downloads],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getSongs,
  addSongs,
};
