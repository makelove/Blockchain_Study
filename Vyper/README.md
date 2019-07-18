
# Vyper是python风格的智能合约开发语言
- Vyper是实验性的，会有变化

- 文档
	- https://vyper.readthedocs.io/en/latest/index.html

- Vyper的在线IDE https://vyper.online
	- 使用最新版的remix 在线，也支持 vyper 编译
- Truffle
- 安装
	- pip install vyper
	- 另外可以使用Docker镜像
		- docker pull ethereum/vyper
- 源代码
	- git clone https://github.com/ethereum/vyper.git
	- 例子
		- examples文件夹都是
- 执行
	- vyper examples/crowdfund.vy
		- 返回bytecode		
	- vyper -f abi_python examples/crowdfund.vy
		- 返回python格式的abi

- 部署
	- 参考我的经验 [web3-py-deploy-vyper.txt](web3-py-deploy-vyper.txt)
	- 通过geth把bytecode部署到以太坊网络
	- web3.py也可以

	- Or deploy it with current browser on myetherwallet contract menu. https://www.myetherwallet.com/#contracts
		- 好像不行，用旧版？		
- 其他命令
	- vyper-lll

	- vyper-serve 服务器？
		- Listening on http://localhost:8000		