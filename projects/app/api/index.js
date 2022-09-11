require("./database");

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body");
const { getRepository } = require("typeorm");
const cors = require("koa-cors");
const serve = require("koa-static");
const mount = require("koa-mount");
const path = require("path");

const app = new Koa();
const router = new Router();

const userModel = require("./models/user");
const _ = require("koa/lib/request");

router.get("/users", async (ctx, next) => {
  const usersRepo = getRepository(userModel);
  const users = await usersRepo.find();
  await usersRepo.save({});
  ctx.body = users;
});

app.use(
  bodyParser({
    formidable: { uploadDir: "./uploads" },
    multipart: true,
    urlencoded: true,
  })
);

router.get("/files", renderForm);
router.post("/upload", handleForm);

function* renderForm() {
  this.render("file_upload");
}

function* handleForm() {
  console.log("Files: ", this.request.body.files);
  console.log("Fields: ", this.request.body.fields);
  this.body = "Received your data!";
}

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(cors());

app.use(router.routes()).use(router.allowedMethods()).listen(3000);
