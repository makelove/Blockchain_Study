
- 参考
    - [HyperLedger Fabric开发实战：快速掌握区块链技术](https://www.cnblogs.com/aberic/category/1148898.html)
        - 京东购买 https://item.jd.com/12381034.html
            - 想要PDF吗？
    - 官网 https://github.com/hyperledger/fabric
        - 安装文档 https://hyperledger-fabric.readthedocs.io/en/latest/install.html

## [Hyperledger Fabric 1.0 从零开始（四）——Fabric源码及镜像文件处理](https://www.cnblogs.com/aberic/p/7532114.html)

- 获取fabric SDK
```shell script
(.py3) localhost:~ play$ go get github.com/hyperledger/fabric
package github.com/hyperledger/fabric: no Go files in /Users/play/go/src/github.com/hyperledger/fabric

git checkout -b v1.1.0 

(.py3) localhost:fabric play$ git status
On branch release-1.4
Your branch is up to date with 'origin/release-1.4'.

nothing to commit, working tree clean
(.py3) localhost:fabric play$ ls examples/
.              ..             chaincode      cluster        configtxupdate events         plugins

#不需要
(.py3) localhost:fabric play$ git checkout -b v1.1.0
Switched to a new branch 'v1.1.0'
(.py3) localhost:fabric play$ git status
On branch v1.1.0
nothing to commit, working tree clean

```
- 最新 git checkout -b v1.4

- 拉取 docker镜像
```shell script
docker pull hyperledger/fabric-tools
docker pull hyperledger/fabric-orderer
docker pull hyperledger/fabric-peer
docker pull hyperledger/fabric-couchdb
docker pull hyperledger/fabric-kafka
docker pull hyperledger/fabric-ca
docker pull hyperledger/fabric-zookeeper
docker pull hyperledger/fabric-baseos
```

```shell script
(.py3) localhost:~ play$ docker pull hyperledger/fabric-peer
Using default tag: latest
latest: Pulling from hyperledger/fabric-peer
34667c7e4631: Pull complete
d18d76a881a4: Pull complete
119c7358fbfc: Pull complete
2aaf13f3eff0: Pull complete
3f89de4cf84b: Pull complete
24194f819972: Pull complete
e77eeeeb4017: Pull complete
c3817a367815: Pull complete
0a4827a6f447: Pull complete
Digest: sha256:fc11964a5201fc559bcee573e601753bf6218e35ded2f5259d86bc73cdc38976
Status: Downloaded newer image for hyperledger/fabric-peer:latest


(.py3) pro:~ play$ docker images
REPOSITORY                                                                                             TAG                 IMAGE ID            CREATED             SIZE
dev-peer1.org2.example.com-mycc-1.0-26c2ef32838554aac4f7ad6f100aca865e87959c9a126e86d764c8d01f8346ab   latest              66772bb7901a        13 hours ago        162MB
dev-peer0.org1.example.com-mycc-1.0-384f11f484b9302df90b453200cfb25174305fce8f53f4e94d45ee3b6cab0ce9   latest              c3a27eeb7f8a        13 hours ago        162MB
dev-peer0.org2.example.com-mycc-1.0-15b571b3ce849066b7ec74497da3b27e54e0df1345daff3951b94245ce09c42b   latest              caa6388f1d0b        13 hours ago        162MB

hyperledger/fabric-zookeeper                                                                           latest              ede9389347db        2 days ago          276MB
hyperledger/fabric-kafka                                                                               latest              caaae0474ef2        2 days ago          270MB
hyperledger/fabric-couchdb                                                                             latest              d369d4eaa0fd        2 days ago          261MB
hyperledger/fabric-baseos                                                                              latest              c256a6aad46f        2 days ago          80.8MB
hyperledger/fabric-tools                                                                               latest              18ed4db0cd57        2 months ago        1.55GB
hyperledger/fabric-ca                                                                                  latest              c18a0d3cc958        2 months ago        253MB
hyperledger/fabric-ccenv                                                                               latest              3d31661a812a        2 months ago        1.45GB
hyperledger/fabric-orderer                                                                             latest              b666a6ebbe09        2 months ago        173MB
hyperledger/fabric-peer                                                                                latest              fa87ccaed0ef        2 months ago        179MB
hyperledger/fabric-baseos                                                                              amd64-0.4.15        9d6ec11c60ff        7 months ago        145MB
```

