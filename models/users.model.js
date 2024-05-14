const crypto = require("crypto");

const users = [
  {
    id: crypto.randomBytes(256).toString("utf8"),
    name: "Rakib",
    email: "rakib@gmail.com",
  },
  {
    id: crypto.randomBytes(256).toString("utf8"),
    name: "Sakib",
    email: "sakib@gmail.com",
  },
];

module.exports = users;
