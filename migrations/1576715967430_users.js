/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
      comment: "The unique id of the user"
    },
    first_name: {
      type: "VARCHAR(50)"
    },
    last_name: {
      type: "VARCHAR(50)"
    },
    email: {
      type: "VARCHAR(50)",
      notNull: true,
      unique: true
    },
    password: {
      type: "TEXT"
    },
    street: {
      type: "VARCHAR(80)"
    },
    city: {
      type: "VARCHAR(20)"
    },
    phone: {
      type: "VARCHAR(20)"
    },
    img: {
      type: "VARCHAR(20)"
    },
    is_admin: {
      type: "BOOLEAN",
      default: false
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp")
    },
    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp")
    },
    deleted_at: {
      type: "timestamptz",
      comment:
        "We do soft deletes - This field marks if a user has been deleted"
    }
  });
};

exports.down = pgm => {
  pgm.dropTable("users", {
    ifExists: true
  });
};
