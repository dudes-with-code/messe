


import lockfile from 'proper-lockfile'
import mariadb from 'mariadb'
import * as fs from "fs"
import path from "path"
/*
mariadb.createConnection({
     host: 'localhost', 
     database: 'messe',
     user:'user', 
     password: 'password',
     port: 4832
}).then(async (conn: any) => {
    // Execute a query/do whatever you need with the connection object here.
    console.log(await conn.query('select * from Admin'))
});
fs.writeFile(path.resolve(__dirname, "../../../../res/dbchangedlog.txt"), "test", (err: any) => {
    if (err) {
      console.error(err)
    }
})




*/



/// Writes index of changed index to changelog

export async function updatedbchangelog(id: any) {
if (typeof window === "undefined") {
  const retryOptions = {
    retries: {
        retries: 20,
        factor: 1,
        minTimeout: 1 * 1000,
        maxTimeout: 15 * 1000,
        randomize: true,
    }
  };
  

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
}
  




  }


