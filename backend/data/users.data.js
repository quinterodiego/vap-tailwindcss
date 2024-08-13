import bcrypt from 'bcryptjs'

export const usersData = [
  {
    name: "Admin",
    email: "admin@node.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "User",
    email: "user@node.com",
    password: bcrypt.hashSync("123456", 10),
  },
];