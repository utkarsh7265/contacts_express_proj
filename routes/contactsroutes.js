const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactcontroller");
const validateToken = require("../middleware/validateToken");

router.use(validateToken);
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact);

module.exports = router;
