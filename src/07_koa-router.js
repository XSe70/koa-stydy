const Koa = require("koa");
const app = new Koa();

const Router = require("koa-router");
const router = new Router();
router.get("/", (ctx, next) => {
  ctx.body = "这是主页";
});
// router.get("/users", (ctx) => {
//   ctx.body = "这是用户列表";
// });

router.post("/users", (ctx) => {
  ctx.body = "创建用户";
});

const db = [
  {
    id: 1,
    name: "张三",
    age: 18,
  },
  {
    id: 2,
    name: "李四",
    age: 19,
  },
];
router.get("/users:id", (ctx) => {
  const id = ctx.params?.id;
  const res = db.find((item) => item.id == id);
  if (!res) {
    ctx.throw(404, "用户不存在");
  }
  ctx.body = res;
});

router.on("error", (error) => {
  ctx.body = error;
});

// router.get("/users", (ctx) => {
//   const { id } = ctx.query;
//   const res = db.find((item) => item.id == id);
//   if (!res) {
//     ctx.throw(404, "用户不存在");
//   }
//   ctx.body = res;
// });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("server is running on port http://localhost:3000");
}); // 监听端口
