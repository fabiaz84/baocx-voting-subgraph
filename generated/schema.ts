// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class HolderBao extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save HolderBao entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save HolderBao entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("HolderBao", id.toString(), this);
  }

  static load(id: string): HolderBao | null {
    return store.get("HolderBao", id) as HolderBao | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class HolderBaocx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save HolderBaocx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save HolderBaocx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("HolderBaocx", id.toString(), this);
  }

  static load(id: string): HolderBaocx | null {
    return store.get("HolderBaocx", id) as HolderBaocx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class HoldertBao extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save HoldertBao entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save HoldertBao entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("HoldertBao", id.toString(), this);
  }

  static load(id: string): HoldertBao | null {
    return store.get("HoldertBao", id) as HoldertBao | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class LockedBaocx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LockedBaocx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LockedBaocx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LockedBaocx", id.toString(), this);
  }

  static load(id: string): LockedBaocx | null {
    return store.get("LockedBaocx", id) as LockedBaocx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get lockOf(): BigInt {
    let value = this.get("lockOf");
    return value.toBigInt();
  }

  set lockOf(value: BigInt) {
    this.set("lockOf", Value.fromBigInt(value));
  }
}