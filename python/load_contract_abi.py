# -*- coding: utf-8 -*-

from web3 import Web3
url='http://127.0.0.1:7545'
web3=Web3(Web3.HTTPProvider(url))
web3.isConnected()
web3.eth.blockNumber

owner = web3.eth.accounts[0]
owner
import json
abi=json.loads('''[
    {
      "constant": true,
      "inputs": [],
      "name": "greeting",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "setGreeting",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "greet",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]''')
address="0xB4fBFD01ce71440e03efce5F98b23A011DBFB19D"
contract=web3.eth.contract(address=address,abi=abi)
contract
contract.address

contract.functions.totalSupply().call()
contract.functions.greet().call()
txhash=contract.functions.setGreeting('new Grelksjdfklj').transact()


contract.functions.greet().call()

tx_hash = greeter.functions.setGreeting('Nihao').transact()
greeter=contract
tx_hash = greeter.functions.setGreeting('Nihao').transact()
print('Default contract greeting: {}'.format(
    greeter.functions.greet().call()
))