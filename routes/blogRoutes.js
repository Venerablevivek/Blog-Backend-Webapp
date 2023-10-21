
//import express
const express  = require("express");
const router = express.Router();

const {createPost} = require("../controllers/createPost");
const {getPost} = require("../controllers/getPost");
const {likePost} = require("../controllers/likePost");
const {dislikePost} = require("../controllers/dislikePost");
const {createComment} = require("../controllers/createComment");
const {getComment} = require("../controllers/getComment");
const {dummyController} = require("../controllers/dummyController");

router.get("/dummyController",dummyController);

router.post("/posts/create",createPost);
router.get("/posts",getPost);
router.post("/likes/like",likePost);
router.post("/likes/unlike",dislikePost)
router.post("/comments/create",createComment);
router.get("/comments",getComment);



module.exports = router;