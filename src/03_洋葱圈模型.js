// 一、导入koa包
const Koa = require("koa");
// 二、实例化app对象
const app = new Koa();
// 三、编写中间件
// 在app.use中只能接受一个函数作为参数
app
  .use((ctx, next) => {
    console.log("1");
    next();
    console.log("2");
  })
  .use((ctx, next) => {
    console.log("3");
    next();
    console.log("4");
  })
  .use((ctx) => {
    console.log("5");
    ctx.body = "组装完成";
  });
// 四、启动服务
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});

/**
 * 结果： 1 3 5 4 2
 */
