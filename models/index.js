const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion avec la base de données réussie");
  } catch (error) {
    onsole.log("Connexion avec la base de données échouée : " + error);
  }
})();

const db = {};

db.Sequelize = sequelize;
db.sequelize = sequelize;

db.engins = require("./enginModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("La base de données es synchronisée");
});

module.exports = db;
