import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'User2',
    email: 'User2@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'User3',
    email: 'User3@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
