const server = require("./src/app.js");
const { conn, Type } = require("./src/db.js");
const axios = require("axios");
const { POKETYPE_API_URL } = require("./constants");
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    axios.get(POKETYPE_API_URL).then((element) => {
      element.data.results.forEach((el) =>
        Type.create({
          name: el.name,
          id: el.id,
        })
      );
    });
  });
});
