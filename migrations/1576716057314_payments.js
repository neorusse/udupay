/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("payments", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
      comment: "The unique id of the payment"
    },
    user_id: {
      type: "uuid",
      comment: "The user that made the payment"
    },
    dues_id: {
      type: "uuid",
      comment: "The dues payment that was made"
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });

  pgm.createConstraint("payments", "payments_user_id_fkey", {
    foreignKeys: {
      columns: "user_id",
      references: 'users("id")'
    }
  });

  pgm.createConstraint("payments", "payments_dues_id_fkey", {
    foreignKeys: {
      columns: "dues_id",
      references: 'dues("id")'
    }
  });
};

exports.down = pgm => {
  pgm.dropTable("payments", {
    ifExists: true
  });
};
