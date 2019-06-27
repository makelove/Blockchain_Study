# -*- coding: utf-8 -*-
'''
参考网址
http://www.dappuniversity.com/articles/web3-py-intro
视频
https://www.bilibili.com/video/av56932533/?p=1
'''
from web3 import Web3

# Fill in your infura API key here
infura_url = 'https://mainnet.infura.io/v3/953247d0c42b419aa3416810d625cc8c'
web3 = Web3(Web3.HTTPProvider(infura_url))

print(web3.isConnected())
print(web3.eth.blockNumber)
'''
True
8037176
'''

# Fill in your account here
balance = web3.eth.getBalance("0x39C7BC5496f4eaaa1fF75d88E079C22f0519E7b9")
print(web3.fromWei(balance, "ether"))#2.830119375196759513