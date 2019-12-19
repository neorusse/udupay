/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("dues", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
      comment: "The unique id of the user"
    },
    name: {
      type: "VARCHAR(50)"
    },
    amount: {
      type: "SMALLINT"
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });
};

exports.down = pgm => {
  pgm.dropTable("dues", {
    ifExists: true
  });
};
