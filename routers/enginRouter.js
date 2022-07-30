const enginController = require("../controllers/enginController");

const router = require("express").Router();

router.route("/engins").post(enginController.ajouterEngin);
router.route("/engins").get(enginController.getTousEngins);

module.exports = router;
