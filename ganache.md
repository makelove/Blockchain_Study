
- 参考
	- [truffle安装以及使用示例](https://segmentfault.com/a/1190000013950908)

ganache-cli是以太坊区块链的模拟环境，不同于geth，
geth是真正的以太坊环境，
ganache-cli是在本地使用内存模拟的一个以太坊环境，

对于开发调试来说，更为方便快捷，当你的合约在ganache-cli中测试通过后，再可以部署到geth中去。

所以用truffle+ganache-cli进行本地开发测试方便快捷，能提升开发者开发测试效率。

安装完成后，直接输入$ganache-cli即可。
会提示正在监听8545端口，这就表示ganache-cli安装成功，同时也开启了区块链测试环境，在进行开发部署中此窗口便一直开启着不能关闭。所以开发测试的过程中需要另开一个terminal运行ganache-cli。