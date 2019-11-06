

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
fa2e79396a14        luminati/luminati-proxy             "docker-entrypoint.s…"   2 months ago        Exited (0) 2 months ago                                keen_albattani
e758b16f3950        luminati/luminati-proxy             "docker-entrypoint.s…"   2 months ago        Exited (0) 2 months ago                                sleepy_hugle
ca5d83f77f55        luminati/luminati-proxy             "docker-entrypoint.s…"   2 months ago        Exited (0) 2 months ago                                vibrant_lewin
3077fa03eb37        pyppeteer:v1                        "/bin/bash"              2 months ago        Exited (0) 2 months ago                                laughing_volhard
2d1d42e229ad        pyppeteer:v1                        "/bin/bash"              2 months ago        Exited (130) 2 months ago                              hardcore_davinci
623e3c0f3f13        pyppeteer:v1                        "/bin/bash"              2 months ago        Exited (0) 2 months ago                                relaxed_feistel
8daf10cc8f6a        pyppeteer:v1                        "/bin/bash"              2 months ago        Exited (255) 2 months ago                              quirky_clarke
cefe8c9e9691        pyppeteer:v1                        "/bin/bash"              2 months ago        Exited (255) 2 months ago                              nifty_brahmagupta
12392dd48a98        pyppeteer:v1                        "/bin/bash"              2 months ago        Exited (1) 2 months ago                                inspiring_hopper
92f01b9f4cc9        pyppeteer:v1                        "/bin/bash"              2 months ago        Exited (0) 2 months ago                                cranky_borg
057903b6d3f3        python:3.6                          "/bin/bash"              2 months ago        Exited (0) 2 months ago                                unruffled_haslett
80d158dfb14a        python:3.6                          "/bin/bash"              2 months ago        Exited (130) 2 months ago                              serene_villani
a2d2e7fa66e1        python:3.6                          "/bin/bash"              2 months ago        Created                                                loving_brattain
3fcbfd8a2069        python:3.6                          "/bin/bash"              2 months ago        Exited (130) 2 months ago                              inspiring_ptolemy
450782598a7b        python:3.6                          "/bin/bash"              2 months ago        Exited (1) 2 months ago                                heuristic_nobel
fa354ed76287        python:3.6                          "/bin/bash"              2 months ago        Exited (0) 2 months ago                                naughty_colden
349d1bbfcda8        python:3.6                          "/bin/bash"              2 months ago        Exited (0) 2 months ago                                blissful_lamport
22aa18eeb401        ubuntu:18.04                        "/bin/bash"              4 months ago        Exited (1) 4 months ago                                relaxed_darwin
42051141b161        d45f06cca8d7                        "bash"                   4 months ago        Exited (255) 4 months ago                              wonderful_wu
9ea12ba9408a        d45f06cca8d7                        "bash"                   4 months ago        Exited (255) 4 months ago                              practical_torvalds
52374b3bacd1        d45f06cca8d7                        "bash"                   4 months ago        Exited (130) 4 months ago                              jovial_mayer
a652ca7b3cdd        d45f06cca8d7                        "bash"                   4 months ago        Exited (0) 4 months ago                                hardcore_pasteur
9b85fe3817ab        d45f06cca8d7                        "bash"                   4 months ago        Exited (2) 4 months ago                                admiring_cori
59c7bb012917        d45f06cca8d7                        "bash"                   4 months ago        Exited (0) 4 months ago                                hungry_mayer
52905f08ef53        d45f06cca8d7                        "bash"                   4 months ago        Exited (0) 4 months ago                                peaceful_banach
66f3c7956990        ubuntu:18.04                        "/bin/bash"              4 months ago        Exited (0) 4 months ago                                bt
602179fa8bb8        ubuntu:18.04                        "--name bt"              4 months ago        Created                                                zen_hawking
351370b3f4c5        ubuntu:18.04                        "/bin/bash"              4 months ago        Exited (127) 4 months ago                              fervent_sanderson
fa2731eed383        ubuntu:18.04                        "/bin/bash"              4 months ago        Exited (255) 4 months ago                              gracious_payne
67b406ba52e3        python:3.6                          "python3"                4 months ago        Exited (0) 4 months ago                                naughty_agnesi
5f161f620599        ubuntu:18.04                        "/bin/bash"              4 months ago        Exited (127) 4 months ago                              practical_murdock

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