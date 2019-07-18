## solcjs 手动编译sol文件



```
(.py3) pro:contracts play$ ls
.              ..             .py2           Migrations.sol call.js        deploy.js      math.sol
(.py3) pro:contracts play$ solcjs --abi --bin math.sol
(.py3) pro:contracts play$ ls
.                 .py2              call.js           math.sol          math_sol_Math.bin
..                Migrations.sol    deploy.js         math_sol_Math.abi

(.py3) pro:contracts play$ cat math_sol_Math.bin
608060405234801561001057600080fd5b5060b88061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063d82cf74914602d575b600080fd5b606060048036036040811015604157600080fd5b8101908080359060200190929190803590602001909291905050506076565b6040518082815260200191505060405180910390f35b600081830190509291505056fea265627a7a72305820a6184167caacfce91a4b5ce99d0dea63524781f376af139c6d5098dee4deaef864736f6c634300050a0032


(.py3) pro:contracts play$ cat math_sol_Math.abi
[{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"addFunc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}]

(.py3) pro:contracts play$

```