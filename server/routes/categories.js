const router = require("express").Router();

// Model
const Category = require("../models/Category");

// Get category
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);

  try {
    const savedCategory = await newCat.save();

    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find({});

    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
