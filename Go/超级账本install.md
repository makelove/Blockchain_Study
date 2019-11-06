
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

(.py3) localhost:~ play$ docker images
REPOSITORY                TAG                 IMAGE ID            CREATED             SIZE
luminati/luminati-proxy   latest              6dc1a7a92aa4        2 months ago        1.38GB
hyperledger/fabric-peer   latest              fa87ccaed0ef        2 months ago        179MB
pyppeteer                 v1                  141e8005d18c        2 months ago        1.43GB
play4fun/bt               v1                  d45f06cca8d7        4 months ago        132MB
ubuntu                    18.04               4c108a37151f        4 months ago        64.2MB
ubuntu                    latest              4c108a37151f        4 months ago        64.2MB
python                    3.6                 48c06762acf0        4 months ago        924MB
```

