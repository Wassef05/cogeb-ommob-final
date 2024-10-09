
const express = require("express");
const {
    createPartner,
    updatePartner,
    deletePartner,
    getAllPartners,
    singlePartner
} = require("../controllers/partner.controller");

const router = express.Router();
router.post("/", createPartner);
router.put("/:id", updatePartner);
router.delete("/:id", deletePartner);
router.get("/", getAllPartners);
router.get("/:id", singlePartner);
module.exports = router;
