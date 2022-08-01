import { AbiItem } from 'web3-utils'

export const EULER_A: AbiItem[] = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccountId","type":"uint256"},{"indexed":false,"internalType":"address","name":"debtReceiver","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogApproveDebt","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccount","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccount","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"subAccount2","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogDTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subaccount","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"enableCollateral","type":"bool"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"subAccount2","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogETransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccountId","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"newMarkets","type":"address[]"}],"name":"LogEnterMarket","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccountId","type":"uint256"},{"indexed":false,"internalType":"address","name":"oldMarket","type":"address"}],"name":"LogExitMarket","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccount","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccount","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogRepay","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subAccountFrom","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"subAccountTo","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyAddr","type":"address"},{"indexed":false,"internalType":"address","name":"sellAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"sellAmt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unitAmt","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"callData","type":"bytes"}],"name":"LogSwap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"subaccount","type":"uint256"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogWithdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"subAccountId","type":"uint256"},{"internalType":"address","name":"debtReceiver","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"approveDebt","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"burn","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"checkIfEnteredMarket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccountFrom","type":"uint256"},{"internalType":"uint256","name":"subAccountTo","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"dTransfer","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"bool","name":"enableCollateral","type":"bool"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccountFrom","type":"uint256"},{"internalType":"uint256","name":"subAccountTo","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"eTransfer","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccountId","type":"uint256"},{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"enterMarket","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccountId","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"exitMarket","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"primary","type":"address"},{"internalType":"uint256","name":"subAccountId","type":"uint256"}],"name":"getSubAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"mint","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"repay","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"subAccountFrom","type":"uint256"},{"internalType":"uint256","name":"subAccountTo","type":"uint256"},{"internalType":"address","name":"buyAddr","type":"address"},{"internalType":"address","name":"sellAddr","type":"address"},{"internalType":"uint256","name":"sellAmt","type":"uint256"},{"internalType":"uint256","name":"unitAmt","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Helpers.swapParams","name":"params","type":"tuple"}],"name":"swap","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"subAccount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"}]