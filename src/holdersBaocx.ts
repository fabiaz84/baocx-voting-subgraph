  
import { BigInt, Address, store } from '@graphprotocol/graph-ts';
import { Transfer, Lock } from '../generated/BaocxToken/BaocxToken';
import { HolderBaocx, LockedBaocx } from '../generated/schema';

function updateBalance(tokenAddress: Address, holderAddress: Address, value: BigInt, increase: boolean): void {
  if (holderAddress.toHexString() == '0x0000000000000000000000000000000000000000') return;
  let id = tokenAddress.toHex() + '-' + holderAddress.toHex();
  let holder = HolderBaocx.load(id);
  if (holder == null) {
    holder = new HolderBaocx(id);
    holder.address = holderAddress;
    holder.balance = BigInt.fromI32(0);
  }
  holder.balance = increase ? holder.balance.plus(value) : holder.balance.minus(value);
  if (holder.balance.isZero()) {
    store.remove('HolderBaocx', id);
  } else {
    holder.save();
  }
}

function updateLockBalance(tokenAddress: Address, holderAddress: Address, value: BigInt, increase: boolean): void {
  if (holderAddress.toHexString() == '0x0000000000000000000000000000000000000000') return;
  let id = tokenAddress.toHex() + '-' + holderAddress.toHex();
  let holder = LockedBaocx.load(id);
  if (holder == null) {
    holder = new LockedBaocx(id);
    holder.address = holderAddress;
    holder.balance = BigInt.fromI32(0);
  }
  holder.balance = increase ? holder.balance.plus(value) : holder.balance.minus(value);
  if (holder.balance.isZero()) {
    store.remove('LockedBaocx', id);
  } else {
    holder.save();
  }
}

 export function handleTransferBaocx(event: Transfer): void {
  updateBalance(event.address, event.params.from, event.params.value, false);
  updateBalance(event.address, event.params.to, event.params.value, true);
}

export function handleLockBaocx(event: Lock): void {
  updateLockBalance(event.address, event.params.to, event.params.value, true);
}