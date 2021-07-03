  
import { BigInt, Address, store } from '@graphprotocol/graph-ts';
import { Transfer } from '../generated/tBaoToken/tBaoToken';
import { HoldertBao } from '../generated/schema';

function updateBalance(tokenAddress: Address, holderAddress: Address, value: BigInt, increase: boolean): void {
  if (holderAddress.toHexString() == '0x0000000000000000000000000000000000000000') return;
  let id = tokenAddress.toHex() + '-' + holderAddress.toHex();
  let holder = HoldertBao.load(id);
  if (holder == null) {
    holder = new HoldertBao(id);
    holder.address = holderAddress;
    holder.balance = BigInt.fromI32(0);
  }
  holder.balance = increase ? holder.balance.plus(value) : holder.balance.minus(value);
  if (holder.balance.isZero()) {
    store.remove('HoldertBao', id);
  } else {
    holder.save();
  }
}

export function handleTransfertBao(event: Transfer): void {
  updateBalance(event.address, event.params.from, event.params.value, false);
  updateBalance(event.address, event.params.to, event.params.value, true);
}