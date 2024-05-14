const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const customImageHandler = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const suffix = "rakib-sbh";
    const extName = path.extname(file.originalname);
    const fileName = path.parse(file.originalname).name;
    cb(null, fileName + "-" + suffix + extName);
  },
});

const upload = multer({
  storage: customImageHandler,
});

const app = express();

//* global middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
});

//* single file upload on a single field
app.post("/", upload.single("image"), (_req, res) => {
  res.json({
    message: "File uploaded successfully",
  });
});

//* multiple file upload on a single field
app.post("/", upload.array("image", 3), (_req, res) => {
  res.json({
    message: "File uploaded successfully",
  });
});

const mutltiFieldUpload = upload.fields([
  {
    name: "image",
    maxCount: 3,
  },
  {
    name: "wallpaper",
    maxCount: 4,
  },
]);

//* upload multiple files from multiple fields
app.post("/", mutltiFieldUpload, (_req, res) => {
  res.json({
    message: "File uploaded successfully",
  });
});

module.exports = app;
