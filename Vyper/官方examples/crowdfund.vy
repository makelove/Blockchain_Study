#众筹
# Setup private variables (only callable from within the contract)

struct Funder :
  sender: address
  value: wei_value

funders: map(int128, Funder) #资助者
nextFunderIndex: int128
beneficiary: address #受益人
deadline: public(timestamp) #截止日期
goal: public(wei_value) #筹款 目标
refundIndex: int128
timelimit: public(timedelta) #倒计时？


# Setup global variables 全局变量
@public
def __init__(_beneficiary: address, _goal: wei_value, _timelimit: timedelta):
    self.beneficiary = _beneficiary #受益人
    self.deadline = block.timestamp + _timelimit
    self.timelimit = _timelimit
    self.goal = _goal


# Participate in this crowdfunding campaign
# 参与众筹活动
@public
@payable
def participate():
    assert block.timestamp < self.deadline, "deadline not met (yet)"

    nfi: int128 = self.nextFunderIndex

    self.funders[nfi] = Funder({sender: msg.sender, value: msg.value})
    self.nextFunderIndex = nfi + 1


# Enough money was raised! Send funds to the beneficiary
#筹到了足够的钱!把钱寄给受益人
@public
def finalize():
    assert block.timestamp >= self.deadline, "deadline not met (yet)"
    assert self.balance >= self.goal, "invalid balance"

    selfdestruct(self.beneficiary)#自我销毁

# Not enough money was raised! Refund everyone (max 30 people at a time
# to avoid gas limit issues)
# 没有筹到足够的钱，退款
@public
def refund():
    assert block.timestamp >= self.deadline and self.balance < self.goal

    ind: int128 = self.refundIndex

    for i in range(ind, ind + 30):
        if i >= self.nextFunderIndex:
            self.refundIndex = self.nextFunderIndex
            return

        send(self.funders[i].sender, self.funders[i].value)
        clear(self.funders[i])

    self.refundIndex = ind + 30
