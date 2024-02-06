// 一、导入koa包
const Koa = require("koa");
// 二、实例化app对象
const app = new Koa();
// 三、编写中间件
// 在app.use中只能接受一个函数作为参数
app
  .use((ctx, next) => {
    ctx.message = "aa";
    next(); // 返回的是一个promise
    ctx.body = ctx.message;
  })
  .use((ctx, next) => {
    ctx.message += " bb";
    next();
  })
  .use((ctx) => {
    ctx.message += " cc";
  });
// 四、启动服务
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});

/**
 * 结果： aa bb cc
 */
