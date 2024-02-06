const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  console.log(ctx); // http 上下文
  if (ctx.url === "/") {
    ctx.body = "这是主页";
  } else if (ctx.url === "/users") {
    if (ctx.method === "GET") {
      ctx.body = "这是用户页";
    } else if (ctx.method === "POST") {
      ctx.body = "创建用户";
    } else {
      ctx.status = "405"; // Method Not Allowed
    }
  } else {
    ctx.body = "404";
  }
});

app.listen(3000, () => {
  console.log("server is running on port http://localhost:3000");
}); // 监听端口
