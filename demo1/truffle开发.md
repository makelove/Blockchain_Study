- 第一次

```
npm install -g truffle

mkdir blackchain
cd blackchain
truffle --help
mkdir test1
cd test1/
truffle init

truffle compile
truffle migrate
```
- 调试

```
#进入命令行
truffle console

let contract
HelloWorld.deployed().then(instance=>contract=instance)

truffle(ganache)> contract.renderHelloWorld()
'HelloWorld'
```


