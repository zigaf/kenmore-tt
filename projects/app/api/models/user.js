const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    firstName: {
      type: "varchar",
      default: "Maxim",
    },
    lastName: {
      type: "varchar",
      default: "Ivanov",
    },
    email: {
      type: "varchar",
      default: "test@mail.ru",
    },
  },
});
