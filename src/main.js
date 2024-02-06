const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "Hello api";
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
