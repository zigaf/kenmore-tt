const typeorm = require("typeorm");
const { createConnection } = require("typeorm");

// const dataSource = new typeorm.DataSource({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   name: "default",
//   username: "root",
//   password: "my-secret-pw",
//   database: "User",
//   synchronize: true,
//   entities: [require("./models/user")],
// });

// dataSource.initialize().catch(function (error) {
//   console.log("Error: ", error);
// });

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  name: "default",
  username: "root",
  password: "my-secret-pw",
  database: "User",
  synchronize: true,
  entities: [require("./models/user")],
});
