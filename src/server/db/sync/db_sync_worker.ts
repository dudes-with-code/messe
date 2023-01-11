const mariadb = require("mariadb");

mariadb
  .createConnection({
    host: "localhost",
    database: "messe",
    user: "user",
    password: "password",
    port: 4832,
  })
  .then(async (conn: any) => {
    // Execute a query/do whatever you need with the connection object here.
    console.log(await conn.query("select * from Admin"));
  });

mariadb
  .createConnection({
    host: "localhost",
    database: "company",
    user: "user",
    password: "password",
    port: 4833,
  })
  .then(async (conn: any) => {
    // Execute a query/do whatever you need with the connection object here.
    console.log(await conn.query("select * from Admin"));
  });

export {};

/*
/// Writes index of changed index to changelog
export async function updatedbchangelog(id: any) {
  const fs = require('fs');
  const path = require("path");
  const retryOptions = {
    retries: {
        retries: 20,
        factor: 1,
        minTimeout: 1 * 1000,
        maxTimeout: 15 * 1000,
        randomize: true,
    }
  };
  
  lockfile.lock(path.resolve(__dirname, "../../../../res/dbchangedlog.txt"), retryOptions)
  .then((release: () => any) => {
    console.log("testW")
    fs.readFile(path.resolve(__dirname, "../../../../res/dbchangedlog.txt"), 'utf8', (err: any, data: string) => {
      if (err) {
        console.log(err)
      } else {
        var newData = `${ data },${ id }`
        fs.writeFile(path.resolve(__dirname, "../../../../res/dbchangedlog.txt"), newData, (err: any) => {
          if (err) {
            console.error(err)
          }
        })
      }
    })
    return release();
  })
  .catch((e: any) => {
      // either lock could not be acquired
      // or releasing it failed
      console.error(e)
  });
  return
}
*/
