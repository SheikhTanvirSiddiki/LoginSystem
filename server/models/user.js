const db = require('../database');

function createUser(phone, password) {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare('INSERT INTO users (phone, password) VALUES (?, ?)');
    stmt.run(phone, password, function(err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
}

function verifyUser(phone, password) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE phone = ? AND password = ?', [phone, password], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

module.exports = {
  createUser,
  verifyUser
};
