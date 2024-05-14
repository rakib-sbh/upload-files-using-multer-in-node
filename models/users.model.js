const crypto = require("crypto");

const users = [
  {
    id: crypto.randomBytes(16).toString("hex"),
    name: "Rakib",
    email: "rakib@gmail.com",
  },
  {
    id: crypto.randomBytes(16).toString("hex"),
    name: "Sakib",
    email: "sakib@gmail.com",
  },
];

module.exports = users;
