# 报错

- Error: Truffle is currently using solc 0.5.8
	- 修改truffle-config.js，添加compilers的指导版本
```
module.exports = {
  // your existing config goes here
  // don't forget to put comma on the last element before proceeding to next line

  compilers: {
    solc: {
      version: "0.4.2"
    }
  }
}
```	
