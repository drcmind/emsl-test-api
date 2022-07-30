const db = require("../models");

const Engin = db.engins;

const ajouterEngin = async (req, res) => {
  const { designation, description } = req.body;

  const engin = await Engin.create({ id: null, designation, description });
  res.status(200).send(engin);
};

const getTousEngins = async (req, res) => {
  let engins = await Engin.findAll({});
  res.status(200).send(engins);
};

module.exports = {
  ajouterEngin,
  getTousEngins,
};
