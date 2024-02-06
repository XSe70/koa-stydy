const Koa = require("koa");

const app = new Koa();

// 编写中间件
app.use((ctx, next) => {
  // ctx：context http请求的上下文
  ctx.body = "hello koa";
});

app.listen(3000, () => {
  console.log("server in running at port http://localhost:3000");
});
