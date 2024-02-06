// await 不能单独使用，必须跟async联用

// await 后面跟一个promise对象，表达式返回promise结果
async function foo() {
  await 123;
}
