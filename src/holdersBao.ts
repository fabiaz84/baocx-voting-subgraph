import { BigInt, Address, store } from '@graphprotocol/graph-ts';
import { Transfer } from '../generated/BaoToken/BaoToken';
import { HolderBao } from '../generated/schema';

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100);
export const BIG_INT_TWENTY_FIVE = BigInt.fromI32(25);

function updateBalance(tokenAddress: Address, holderAddress: Address, value: BigInt, increase: boolean): void {
  if (holderAddress.toHexString() == '0x0000000000000000000000000000000000000000') return;
  let id = tokenAddress.toHex() + '-' + holderAddress.toHex();
  let holder = HolderBao.load(id);
  if (holder == null) {
    holder = new HolderBao(id);
    holder.address = holderAddress;
    holder.balance = BigInt.fromI32(0);
  } 
    holder.balance = increase ? holder.balance.plus(value) : holder.balance.minus(value);
        if (holder.balance.isZero()) {
    store.remove('HolderBao', id);
  } else {
    holder.save();
  }
}

export function handleTransferBao(event: Transfer): void {
  updateBalance(event.address, event.params.from, event.params.value.times(BIG_INT_TWENTY_FIVE).div(BIG_INT_ONE_HUNDRED), false);
  updateBalance(event.address, event.params.to, event.params.value.times(BIG_INT_TWENTY_FIVE).div(BIG_INT_ONE_HUNDRED), true);
}