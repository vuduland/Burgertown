import { db as orm } from '../config/orm';

const burger = {
  all: function(cb) {
    orm.all('burgers', res => {
      cb(res);
    });
  },
  create: function(cb) {
    orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
  },
  update: function(id, cb) {
    const condition = `id = ${id}`;
    orm.update(
      'burgers',
      {
        devoured: true
      },
      condition,
      cb
    );
  }
};

export const burger = burger;
