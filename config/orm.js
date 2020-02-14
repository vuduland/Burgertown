const connection = require('./connection');

function printQuestionMarks(num) {
  const arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  const arr = [];

  for (var key in ob) {
    arr.push(`${key} = ${ob[key]}`);
  }

  return arr.toString();
}

const db = {
  all: function(tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput} ;`;
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} `;

    queryString += `(${cols.toString()}) VALUES (${printQuestionMarks(
      vals.length
    )})`;

    console.log(queryString);

    connection.query(queryString, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  update: function(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objToSql(
      objColVals
    )} WHERE ${condition}`;

    console.log(queryString);
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

module.exports = db;
