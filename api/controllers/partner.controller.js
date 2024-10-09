const Partner = require("../models/partner.model.js");
const { throwError } = require("../utils/error.js");
const createPartner = async (req, res, next) => {
  try {
    const partner = await Partner.create(req.body);
    res.status(201).json({ success: true, data: partner });
  } catch (error) {
    next(error);
  }
};
const deletePartner = async (req, res, next) => {
  try {
    const isPartnerExist = await Partner.findById(req.params.id);
    if (!isPartnerExist) return next(throwError(404, "Partner not found"));
    
    await Partner.findByIdAndDelete(req.params.id);
    res.status(200).json("Partner deleted successfully");
  } catch (error) {
    next(error);
  }
};
const updatePartner = async (req, res, next) => {
  try {
    const isPartnerExist = await Partner.findById(req.params.id);
    if (!isPartnerExist) return next(throwError(404, "Partner not found"));

    const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPartner);
  } catch (error) {
    next(error);
  }
};
const getAllPartners = async (req, res, next) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    next(error);
  }
};
const singlePartner = async (req, res, next) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return next(throwError(404, "Partner not found"));
    res.status(200).json(partner);
  } catch (error) {
    next(error);
  }
};

module.exports = { createPartner, deletePartner, updatePartner, getAllPartners, singlePartner };
