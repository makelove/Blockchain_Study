## geth 

```
(.py3) pro:~ play$ geth console
INFO [07-18|16:44:00.641] Bumping default cache on mainnet         provided=1024 updated=4096
WARN [07-18|16:44:00.643] Sanitizing cache to Go's GC limits       provided=4096 updated=2730
INFO [07-18|16:44:00.648] Maximum peer count                       ETH=50 LES=0 total=50
INFO [07-18|16:44:00.678] Starting peer-to-peer node               instance=Geth/v1.9.0-stable-52f24617/darwin-amd64/go1.12.7
INFO [07-18|16:44:00.679] Allocated trie memory caches             clean=682.00MiB dirty=682.00MiB
INFO [07-18|16:44:00.679] Allocated cache and file handles         database=/Users/play/Library/Ethereum/geth/chaindata cache=1.33GiB handles=5120
INFO [07-18|16:44:00.776] Opened ancient database                  database=/Users/play/Library/Ethereum/geth/chaindata/ancient
INFO [07-18|16:44:00.781] Initialised chain configuration          config="{ChainID: 1 Homestead: 1150000 DAO: 1920000 DAOSupport: true EIP150: 2463000 EIP155: 2675000 EIP158: 2675000 Byzantium: 4370000 Constantinople: 7280000  Petersburg: 7280000 Engine: ethash}"
INFO [07-18|16:44:00.781] Disk storage enabled for ethash caches   dir=/Users/play/Library/Ethereum/geth/ethash count=3
INFO [07-18|16:44:00.781] Disk storage enabled for ethash DAGs     dir=/Users/play/Library/Ethash               count=2
INFO [07-18|16:44:00.782] Initialising Ethereum protocol           versions=[63] network=1 dbversion=7
INFO [07-18|16:44:00.912] Loaded most recent local header          number=2496 hash=2f3bf5…246460 td=83203260865481 age=4y1w1d
INFO [07-18|16:44:00.912] Loaded most recent local full block      number=0    hash=d4e567…cb8fa3 td=17179869184    age=50y3mo5d
INFO [07-18|16:44:00.912] Loaded most recent local fast block      number=2119 hash=5b91aa…00fdf8 td=63386036986769 age=4y1w1d
INFO [07-18|16:44:00.913] Loaded local transaction journal         transactions=0 dropped=0
INFO [07-18|16:44:00.913] Regenerated local transaction journal    transactions=0 accounts=0
INFO [07-18|16:44:00.942] Allocated fast sync bloom                size=1.33GiB
INFO [07-18|16:44:01.054] New local node record                    seq=6 id=af51b12159d22b22 ip=127.0.0.1 udp=30303 tcp=30303
INFO [07-18|16:44:01.063] Started P2P networking                   self=enode://ff98d8f3e6376800aeab45b073f297178d32bbda67fe11d282df3d5baa63bd7b981278dbc9c383e775906718c8870f5a5b172c46b218e9a38ef1b8caf812832c@127.0.0.1:30303
INFO [07-18|16:44:01.065] IPC endpoint opened                      url=/Users/play/Library/Ethereum/geth.ipc
INFO [07-18|16:44:01.154] Initialized fast sync bloom              items=13122 errorrate=0.000 elapsed=212.538ms
WARN [07-18|16:44:01.224] Served eth_coinbase                      reqid=3 t=1.297485ms err="etherbase must be explicitly specified"
Welcome to the Geth JavaScript console!

instance: Geth/v1.9.0-stable-52f24617/darwin-amd64/go1.12.7
at block: 0 (Thu, 01 Jan 1970 08:00:00 CST)
 datadir: /Users/play/Library/Ethereum
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> INFO [07-18|16:44:08.091] New local node record                    seq=7 id=af51b12159d22b22 ip=223.71.81.68 udp=30303 tcp=30303


> ^C
> INFO [07-18|16:44:21.684] IPC endpoint closed                      url=/Users/play/Library/Ethereum/geth.ipc
INFO [07-18|16:44:21.684] Blockchain manager stopped
INFO [07-18|16:44:21.684] Stopping Ethereum protocol
INFO [07-18|16:44:21.684] Ethereum protocol stopped
INFO [07-18|16:44:21.684] Transaction pool stopped
```