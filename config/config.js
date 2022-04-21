require("dotenv").config();
module.exports = {
  development: {
    username: "lawrenceol",
    password: "null",
    database: "out_and_about_5",
    dialect: "postgres",
  },
  test: {
    database: "out_and_about_5",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
