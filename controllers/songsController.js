const Songs = require("../models/tabs.js");
const express = require('express');
const router = express.Router();

// define routes
router.get("/", (req, res) => {
  Songs.find({}, (err, allSongs) => {
    res.render("index.ejs", {
      songs: allSongs,
    });
  });
});

router.get("/requests", (req, res) => {
  Songs.find({ request: true }, (err, requestSongs) => {
    res.render("requests.ejs", {
      songs: requestSongs,
    });
  });
});

router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.get("/new/request", (req, res) => {
  res.render("newreq.ejs");
});

router.delete("/:id", (req, res) => {
  Songs.findByIdAndRemove(req.params.id, (err, deletedSong) => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  Songs.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedSong) => {
      res.redirect(`/${req.params.id}`);
    }
  );
});

router.post("/", (req, res) => {
  if (req.body.act === "submit request") {
    req.body.request = true;
  } else {
    req.body.request = false;
  }

  Songs.create(req.body, (err, createdSong) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

router.get("/:id/edit", (req, res) => {
  Songs.findById(req.params.id, (err, foundSong) => {
    if (err) {
      console.log(err);
      res.redirect(`/${foundSong._id}`);
    } else {
      res.render("edit.ejs", {
        song: foundSong,
      });
    }
  });
});

router.get("/:id", (req, res) => {
  Songs.findById(req.params.id, (err, foundSong) => {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      res.render("show.ejs", { song: foundSong });
    }
  });
});

module.exports = router;
