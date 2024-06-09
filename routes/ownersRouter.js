const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model");

router.get("/", (req, res) => {
  res.send("hey its working");
});

router.post("/create", async (req, res) => {


  let owners = await ownerModel.find();
  if (owners.length > 0){
    return res.send(504).send("you don't have permission to create owner.");
}

    const {fullname,email,password} = req.body;

    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
    });
    res.status(200).send(createdOwner)

});

module.exports = router;
 