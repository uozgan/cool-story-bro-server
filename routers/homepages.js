const { Router } = require("express");
const Homepage = require("../models").homepage;
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const homepages = await Homepage.findAndCountAll({
    limit,
    offset,
    include: [Story]
  });
  res.status(200).send({ message: "ok", homepages });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Homepage id is not a number" });
  }

  const homepage = await Homepage.findByPk(id, {
    include: [Story],
    order: [[Story, "createdAt", "DESC"]]
  });

  if (homepage === null) {
    return res.status(404).send({ message: "Homepage not found" });
  }

  res.status(200).send({ message: "ok", homepage });
});

module.exports = router;
