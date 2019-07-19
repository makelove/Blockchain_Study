## truffle

- 参考
	- [Solidity truffle，通过web3.js部署合约、调用合约](https://blog.csdn.net/houyanhua1/article/details/88994068)
		- 感觉不错
	- 1

- 版本号
```
(.py3) pro:truffle_hellow play$ truffle version
Truffle v5.0.24 (core: 5.0.24)
Solidity v0.5.0 (solc-js)
Node v12.4.0
Web3.js v1.0.0-beta.37
```

```
(.py3) pro:truffle_hellow play$ truffle init

✔ Preparing to download
✔ Downloading
✔ Cleaning up temporary files
✔ Setting up box

Unbox successful. Sweet!

Commands:

  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test

```

```
truffle develop

Truffle Develop started at http://127.0.0.1:9545/

Accounts:
(0) 0x5891ff382cd904a4138dcdeeec1f41f13cbf12e7
(1) 0x9452fe957ad0b0069b0600b06342fbb4524e7f8c
(2) 0x47d2783d31788733d055e7658d9f2aeaf7ad6aa5
(3) 0xef74abbc3da5ffe78fe386d273ab9c2492c574ae
(4) 0xb15ae884b984f380846ce0f6f074f5dd38d8c60e
(5) 0xb354a142c61daab4625cb0e2493e441748302f2a
(6) 0x61a9b09b227f365b041af2de78fe08fc5fb4b041
(7) 0xc218fbf9102d21acecf4f281a354c4d891573350
(8) 0xc8897e134fcd89438391cf8a5f3f1205ab56332e
(9) 0xb3a3772ad6a5212b3d67d926f660b0a13a5bdd88

Private Keys:
(0) 8684fa577787fbced27e14b18071e5f9279db27c23ea552aba186667494bdf1c
(1) 34d58102a65eed27e50bd9d8211d4c46cb5fcd341cbdebf30f5d0251d6be691f
(2) f1010017f90d9f004a120a6727204ae56b70f847472a643e3a304162e4762825
(3) f3c8ca0f2ba5ad445106ec5e3cd3390ab876297886c3b1c0b8bc3a324598bcb9
(4) 30aa990afce54f33793fba6877b8c458e850d929d0c1c57a21647f5dde71cde5
(5) 3f37affb1055be5aa9e3908d323a984f945b10460778592e09aaf23d91b47078
(6) 7f5c7942e82b52f08003040b2500bf727f432554647768083be93143f6542b55
(7) 012a9c31a433b062499221bb524e283eed8f406e9956de34b4772ab31279e4d4
(8) a8ab3ca4fab23d390312c4eae0641e7fe72c24620cfd1f1712cef308780552d7
(9) ca788da8f41d41ba235cffdd016104cdb889434eba403a42eb1e39a55beedd9e

Mnemonic: canyon spirit vicious palace night space bind tiger coral child piece era

⚠️  Important ⚠️  : This mnemonic was created for you by Truffle. It is not secure.
Ensure you do not use it on production blockchains, or else you risk losing funds.

truffle(develop)>
```

```
truffle compile --list --all
[
 "0.5.10",
 "0.5.9",
 "0.5.8",
 "0.5.7",
 "0.5.6",
 "0.5.5",
 "0.5.4",
 "0.5.3",
 "0.5.2",
 "0.5.1",
 "0.5.0",
 "0.4.26",
 "0.4.25",
 "0.4.24",
 "0.4.23",
 "0.4.22",
 "0.4.21",
 "0.4.20",
 "0.4.19",
 "0.4.18",
 "0.4.17",
 "0.4.16",
 "0.4.15",
 "0.4.14",
 "0.4.13",
 "0.4.12",
 "0.4.11",
 "0.4.10",
 "0.4.9",
 "0.4.8",
 "0.4.7",
 "0.4.6",
 "0.4.5",
 "0.4.4",
 "0.4.3",
 "0.4.2",
 "0.4.1",
 "0.4.0",
 "0.3.6",
 "0.3.5",
 "0.3.4",
 "0.3.3",
 "0.3.2",
 "0.3.1",
 "0.3.0",
 "0.2.2",
 "0.2.1",
 "0.2.0",
 "0.1.7",
 "0.1.6",
 "0.1.5",
 "0.1.4",
 "0.1.3",
 "0.1.2",
 "0.1.1"
]
```