

- 步骤
    - 当前目录
        - /Users/play/github/GO/
    - 运行 bootstrap.sh
        - 自动 git clone https://github.com/hyperledger/fabric-samples.git
        - 然后下载 https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/darwin-amd64-1.4.3/hyperledger-fabric-darwin-amd64-1.4.3.tar.gz
            - 由于网络问题，不能下载，便要手动下载
            - 解压到当前目录， bin和config 文件夹
                - /Users/play/github/GO/fabric-samples
```shell script
(.py3) pro:fabric-samples play$ ls bin/
.             ..            configtxgen   configtxlator cryptogen     discover      idemixgen     orderer       peer
(.py3) pro:fabric-samples play$ ls config/
.             ..            configtx.yaml core.yaml     orderer.yaml
```

       
- cd first-network
- ./byfn.sh up
    - 第一次
```shell script
(.py3) pro:first-network play$ ./byfn.sh up
Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n]
proceeding ...
LOCAL_VERSION=1.4.3
DOCKER_IMAGE_VERSION=1.4.3
/Users/play/github/GO/fabric-samples/first-network/../bin/cryptogen

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x

Generate CCP files for Org1 and Org2
/Users/play/github/GO/fabric-samples/first-network/../bin/configtxgen
##########################################################
#########  Generating Orderer Genesis block ##############
##########################################################
CONSENSUS_TYPE=solo
+ '[' solo == solo ']'
+ configtxgen -profile TwoOrgsOrdererGenesis -channelID byfn-sys-channel -outputBlock ./channel-artifacts/genesis.block
2019-11-06 16:33:15.962 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 16:33:16.062 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 002 orderer type: solo
2019-11-06 16:33:16.062 CST [common.tools.configtxgen.localconfig] Load -> INFO 003 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.157 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 004 orderer type: solo
2019-11-06 16:33:16.157 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 005 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.161 CST [common.tools.configtxgen] doOutputBlock -> INFO 006 Generating genesis block
2019-11-06 16:33:16.163 CST [common.tools.configtxgen] doOutputBlock -> INFO 007 Writing genesis block
+ res=0
+ set +x

#################################################################
### Generating channel configuration transaction 'channel.tx' ###
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
2019-11-06 16:33:16.199 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 16:33:16.313 CST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.425 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-11-06 16:33:16.425 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.425 CST [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 005 Generating new channel configtx
2019-11-06 16:33:16.430 CST [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 006 Writing new channel tx
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org1MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP
2019-11-06 16:33:16.471 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 16:33:16.581 CST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.701 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-11-06 16:33:16.701 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.701 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-11-06 16:33:16.701 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org2MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP
2019-11-06 16:33:16.744 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 16:33:16.850 CST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.967 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-11-06 16:33:16.967 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 16:33:16.967 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-11-06 16:33:16.967 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x

Creating network "net_byfn" with the default driver
Creating volume "net_orderer.example.com" with default driver
Creating volume "net_peer0.org1.example.com" with default driver
Creating volume "net_peer1.org1.example.com" with default driver
Creating volume "net_peer0.org2.example.com" with default driver
Creating volume "net_peer1.org2.example.com" with default driver
Creating peer1.org2.example.com ... done
Creating orderer.example.com    ... done
Creating peer0.org1.example.com ... done
Creating peer1.org1.example.com ... done
Creating peer0.org2.example.com ... done
Creating cli                    ... done
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS                      PORTS                      NAMES
e079af1db8be        hyperledger/fabric-tools:latest     "/bin/bash"              2 seconds ago       Up Less than a second                                  cli
61717ef66f88        hyperledger/fabric-peer:latest      "peer node start"        7 seconds ago       Up 2 seconds                0.0.0.0:7051->7051/tcp     peer0.org1.example.com
17c57646a607        hyperledger/fabric-peer:latest      "peer node start"        7 seconds ago       Up 2 seconds                0.0.0.0:10051->10051/tcp   peer1.org2.example.com
20abaae34445        hyperledger/fabric-peer:latest      "peer node start"        7 seconds ago       Up 2 seconds                0.0.0.0:8051->8051/tcp     peer1.org1.example.com
85a9bbaf27e9        hyperledger/fabric-peer:latest      "peer node start"        7 seconds ago       Up 2 seconds                0.0.0.0:9051->9051/tcp     peer0.org2.example.com
3d74742737c4        hyperledger/fabric-orderer:latest   "orderer"                7 seconds ago       Up 4 seconds                0.0.0.0:7050->7050/tcp     orderer.example.com


 ____    _____      _      ____    _____
/ ___|  |_   _|    / \    |  _ \  |_   _|
\___ \    | |     / _ \   | |_) |   | |
 ___) |   | |    / ___ \  |  _ <    | |
|____/    |_|   /_/   \_\ |_| \_\   |_|

Build your first network (BYFN) end-to-end test

Channel name : mychannel
Creating channel...
+ peer channel create -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/channel.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-11-06 08:33:27.076 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 08:33:27.142 UTC [cli.common] readBlock -> INFO 002 Got status: &{NOT_FOUND}
2019-11-06 08:33:27.173 UTC [channelCmd] InitCmdFactory -> INFO 003 Endorser and orderer connections initialized
2019-11-06 08:33:27.383 UTC [cli.common] readBlock -> INFO 004 Received block: 0
===================== Channel 'mychannel' created =====================

Having all peers join the channel...
+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 08:33:27.540 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 08:33:27.617 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 08:33:30.789 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 08:33:30.867 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 08:33:34.053 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 08:33:34.121 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org2 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 08:33:37.316 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 08:33:37.398 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org2 joined channel 'mychannel' =====================

Updating anchor peers for org1...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org1MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-11-06 08:33:40.587 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 08:33:40.630 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org1MSP' on channel 'mychannel' =====================

Updating anchor peers for org2...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org2MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-11-06 08:33:43.900 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 08:33:43.937 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org2MSP' on channel 'mychannel' =====================

Installing chaincode on peer0.org1...
+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
+ res=0
+ set +x
2019-11-06 08:33:47.207 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-11-06 08:33:47.207 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-11-06 08:33:48.343 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer0.org1 =====================

Install chaincode on peer0.org2...
+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
+ res=0
+ set +x
2019-11-06 08:33:48.571 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-11-06 08:33:48.572 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-11-06 08:33:48.906 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer0.org2 =====================

Instantiating chaincode on peer0.org2...
+ peer chaincode instantiate -o orderer.example.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n mycc -l golang -v 1.0 -c '{"Args":["init","a","100","b","200"]}' -P 'AND ('\''Org1MSP.peer'\'','\''Org2MSP.peer'\'')'
+ res=1
+ set +x
2019-11-06 08:33:49.123 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-11-06 08:33:49.124 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
Error: could not assemble transaction, err proposal response was not successful, error code 500, msg error starting container: error starting container: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
!!!!!!!!!!!!!!! Chaincode instantiation on peer0.org2 on channel 'mychannel' failed !!!!!!!!!!!!!!!!
========= ERROR !!! FAILED to execute End-2-End Scenario ===========

ERROR !!!! Test failed
```
- https://registry-1.docker.io/v2/ 连接超时
    - 解决： 使用自己搭建的代理
        - export http_proxy=http://127.0.0.1:8118;export https_proxy=http://127.0.0.1:8118;

- 第二次测试
```shell script
(.py3) localhost:first-network play$ ./byfn.sh up
Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n]
proceeding ...
LOCAL_VERSION=1.4.3
DOCKER_IMAGE_VERSION=1.4.3
/Users/play/github/GO/fabric-samples/first-network/../bin/cryptogen

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x

Generate CCP files for Org1 and Org2
/Users/play/github/GO/fabric-samples/first-network/../bin/configtxgen
##########################################################
#########  Generating Orderer Genesis block ##############
##########################################################
CONSENSUS_TYPE=solo
+ '[' solo == solo ']'
+ configtxgen -profile TwoOrgsOrdererGenesis -channelID byfn-sys-channel -outputBlock ./channel-artifacts/genesis.block
2019-11-06 21:44:23.879 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 21:44:24.009 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 002 orderer type: solo
2019-11-06 21:44:24.009 CST [common.tools.configtxgen.localconfig] Load -> INFO 003 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:24.120 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 004 orderer type: solo
2019-11-06 21:44:24.120 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 005 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:24.124 CST [common.tools.configtxgen] doOutputBlock -> INFO 006 Generating genesis block
2019-11-06 21:44:24.126 CST [common.tools.configtxgen] doOutputBlock -> INFO 007 Writing genesis block
+ res=0
+ set +x

#################################################################
### Generating channel configuration transaction 'channel.tx' ###
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
2019-11-06 21:44:24.188 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 21:44:24.325 CST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:24.490 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-11-06 21:44:24.490 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:24.491 CST [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 005 Generating new channel configtx
2019-11-06 21:44:24.500 CST [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 006 Writing new channel tx
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org1MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP
2019-11-06 21:44:24.552 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 21:44:24.701 CST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:24.874 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-11-06 21:44:24.874 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:24.874 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-11-06 21:44:24.874 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org2MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP
2019-11-06 21:44:24.930 CST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-11-06 21:44:25.052 CST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:25.183 CST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-11-06 21:44:25.183 CST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/play/github/GO/fabric-samples/first-network/configtx.yaml
2019-11-06 21:44:25.183 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-11-06 21:44:25.183 CST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x

Creating network "net_byfn" with the default driver
Creating volume "net_orderer.example.com" with default driver
Creating volume "net_peer0.org1.example.com" with default driver
Creating volume "net_peer1.org1.example.com" with default driver
Creating volume "net_peer0.org2.example.com" with default driver
Creating volume "net_peer1.org2.example.com" with default driver
Creating peer1.org2.example.com ... done
Creating peer0.org1.example.com ... done
Creating peer0.org2.example.com ... done
Creating peer1.org1.example.com ... done
Creating orderer.example.com    ... done
Creating cli                    ... done
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS                      PORTS                      NAMES
d6ad22ef018e        hyperledger/fabric-tools:latest     "/bin/bash"              2 seconds ago       Up Less than a second                                  cli
4ccaae9f2c98        hyperledger/fabric-orderer:latest   "orderer"                5 seconds ago       Up 1 second                 0.0.0.0:7050->7050/tcp     orderer.example.com
1065cfc09782        hyperledger/fabric-peer:latest      "peer node start"        5 seconds ago       Up 2 seconds                0.0.0.0:8051->8051/tcp     peer1.org1.example.com
d6f7d7db321b        hyperledger/fabric-peer:latest      "peer node start"        5 seconds ago       Up 2 seconds                0.0.0.0:10051->10051/tcp   peer1.org2.example.com
2110e1d48596        hyperledger/fabric-peer:latest      "peer node start"        5 seconds ago       Up 2 seconds                0.0.0.0:7051->7051/tcp     peer0.org1.example.com
2f6ea0f773b3        hyperledger/fabric-peer:latest      "peer node start"        5 seconds ago       Up 2 seconds                0.0.0.0:9051->9051/tcp     peer0.org2.example.com


 ____    _____      _      ____    _____
/ ___|  |_   _|    / \    |  _ \  |_   _|
\___ \    | |     / _ \   | |_) |   | |
 ___) |   | |    / ___ \  |  _ <    | |
|____/    |_|   /_/   \_\ |_| \_\   |_|

Build your first network (BYFN) end-to-end test

Channel name : mychannel
+ peer channel create -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/channel.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
Creating channel...
+ res=0
+ set +x
2019-11-06 13:44:32.993 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 13:44:33.087 UTC [cli.common] readBlock -> INFO 002 Received block: 0
===================== Channel 'mychannel' created =====================

Having all peers join the channel...
+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 13:44:33.296 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 13:44:33.416 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 13:44:36.613 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 13:44:36.702 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 13:44:39.939 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 13:44:40.033 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org2 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-11-06 13:44:43.230 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 13:44:43.315 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org2 joined channel 'mychannel' =====================

Updating anchor peers for org1...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org1MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-11-06 13:44:46.511 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 13:44:46.562 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org1MSP' on channel 'mychannel' =====================

Updating anchor peers for org2...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org2MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-11-06 13:44:49.784 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-11-06 13:44:49.828 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org2MSP' on channel 'mychannel' =====================

+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
Installing chaincode on peer0.org1...
+ res=0
+ set +x
2019-11-06 13:44:53.087 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-11-06 13:44:53.087 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-11-06 13:44:53.523 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer0.org1 =====================

Install chaincode on peer0.org2...
+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
+ res=0
+ set +x
2019-11-06 13:44:53.754 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-11-06 13:44:53.754 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-11-06 13:44:54.063 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer0.org2 =====================

Instantiating chaincode on peer0.org2...
+ peer chaincode instantiate -o orderer.example.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n mycc -l golang -v 1.0 -c '{"Args":["init","a","100","b","200"]}' -P 'AND ('\''Org1MSP.peer'\'','\''Org2MSP.peer'\'')'

+ res=0
+ set +x
2019-11-06 13:44:54.313 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-11-06 13:44:54.313 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
===================== Chaincode is instantiated on peer0.org2 on channel 'mychannel' =====================

Querying chaincode on peer0.org1...
===================== Querying on peer0.org1 on channel 'mychannel'... =====================
Attempting to Query peer0.org1 ...3 secs
+ peer chaincode query -C mychannel -n mycc -c '{"Args":["query","a"]}'
+ res=0
+ set +x

100
===================== Query successful on peer0.org1 on channel 'mychannel' =====================
Sending invoke transaction on peer0.org1 peer0.org2...
+ peer chaincode invoke -o orderer.example.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.example.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt --peerAddresses peer0.org2.example.com:9051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt -c '{"Args":["invoke","a","b","10"]}'
+ res=0
+ set +x
2019-11-06 13:46:50.847 UTC [chaincodeCmd] chaincodeInvokeOrQuery -> INFO 001 Chaincode invoke successful. result: status:200
===================== Invoke transaction successful on peer0.org1 peer0.org2 on channel 'mychannel' =====================

Installing chaincode on peer1.org2...
+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
+ res=0
+ set +x
2019-11-06 13:46:51.139 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-11-06 13:46:51.140 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-11-06 13:46:51.615 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer1.org2 =====================

Querying chaincode on peer1.org2...
===================== Querying on peer1.org2 on channel 'mychannel'... =====================
Attempting to Query peer1.org2 ...3 secs
+ peer chaincode query -C mychannel -n mycc -c '{"Args":["query","a"]}'
+ res=0
+ set +x

90
===================== Query successful on peer1.org2 on channel 'mychannel' =====================

========= All GOOD, BYFN execution completed ===========


 _____   _   _   ____
| ____| | \ | | |  _ \
|  _|   |  \| | | | | |
| |___  | |\  | | |_| |
|_____| |_| \_| |____/

```        

- Docker进程
```shell script
(.py3) pro:first-network play$ docker ps
CONTAINER ID        IMAGE                               COMMAND             CREATED             STATUS              PORTS                      NAMES
e079af1db8be        hyperledger/fabric-tools:latest     "/bin/bash"         3 minutes ago       Up 3 minutes                                   cli
61717ef66f88        hyperledger/fabric-peer:latest      "peer node start"   3 minutes ago       Up 3 minutes        0.0.0.0:7051->7051/tcp     peer0.org1.example.com
17c57646a607        hyperledger/fabric-peer:latest      "peer node start"   3 minutes ago       Up 3 minutes        0.0.0.0:10051->10051/tcp   peer1.org2.example.com
20abaae34445        hyperledger/fabric-peer:latest      "peer node start"   3 minutes ago       Up 3 minutes        0.0.0.0:8051->8051/tcp     peer1.org1.example.com
85a9bbaf27e9        hyperledger/fabric-peer:latest      "peer node start"   3 minutes ago       Up 3 minutes        0.0.0.0:9051->9051/tcp     peer0.org2.example.com
3d74742737c4        hyperledger/fabric-orderer:latest   "orderer"           3 minutes ago       Up 3 minutes        0.0.0.0:7050->7050/tcp     orderer.example.com


(.py3) localhost:first-network play$ docker ps
CONTAINER ID        IMAGE                                                                                                  COMMAND                  CREATED              STATUS              PORTS                      NAMES
b10968689adb        dev-peer1.org2.example.com-mycc-1.0-26c2ef32838554aac4f7ad6f100aca865e87959c9a126e86d764c8d01f8346ab   "chaincode -peer.add…"   About a minute ago   Up About a minute                              dev-peer1.org2.example.com-mycc-1.0
8181995b6cc9        dev-peer0.org1.example.com-mycc-1.0-384f11f484b9302df90b453200cfb25174305fce8f53f4e94d45ee3b6cab0ce9   "chaincode -peer.add…"   2 minutes ago        Up 2 minutes                                   dev-peer0.org1.example.com-mycc-1.0
69cc3dd96788        dev-peer0.org2.example.com-mycc-1.0-15b571b3ce849066b7ec74497da3b27e54e0df1345daff3951b94245ce09c42b   "chaincode -peer.add…"   3 minutes ago        Up 3 minutes                                   dev-peer0.org2.example.com-mycc-1.0
d6ad22ef018e        hyperledger/fabric-tools:latest                                                                        "/bin/bash"              4 minutes ago        Up 4 minutes                                   cli
4ccaae9f2c98        hyperledger/fabric-orderer:latest                                                                      "orderer"                4 minutes ago        Up 4 minutes        0.0.0.0:7050->7050/tcp     orderer.example.com
1065cfc09782        hyperledger/fabric-peer:latest                                                                         "peer node start"        4 minutes ago        Up 4 minutes        0.0.0.0:8051->8051/tcp     peer1.org1.example.com
d6f7d7db321b        hyperledger/fabric-peer:latest                                                                         "peer node start"        4 minutes ago        Up 4 minutes        0.0.0.0:10051->10051/tcp   peer1.org2.example.com
2110e1d48596        hyperledger/fabric-peer:latest                                                                         "peer node start"        4 minutes ago        Up 4 minutes        0.0.0.0:7051->7051/tcp     peer0.org1.example.com
2f6ea0f773b3        hyperledger/fabric-peer:latest                                                                         "peer node start"        4 minutes ago        Up 4 minutes        0.0.0.0:9051->9051/tcp     peer0.org2.example.com
```