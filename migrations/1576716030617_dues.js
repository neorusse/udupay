/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("dues", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
      comment: "The unique id of the due"
    },
    name: {
      type: "VARCHAR(50)",
      notNull: true,
      unique: true
    },
    amount: {
      type: "SMALLINT",
      notNull: true
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });
  pgm.createConstraint("dues", "name_lowercase_ck", {
    check: "name=LOWER(name)"
  });
};

exports.down = pgm => {
  pgm.dropTable("dues", {
    ifExists: true
  });
};
