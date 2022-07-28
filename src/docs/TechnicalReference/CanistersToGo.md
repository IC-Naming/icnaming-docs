---
sidebar_position: 1
---

# Canister To Go

There are some canisters that are used by IC Naming to manage names. In this post we go through some simple scenarios to
understand how to perform business operations through their API.

## Registering a Name

I want to register a name like "hello.ic".

Canister related:

- Registrar

### Register with Quota

You can register a name by calling the `register_xxx` methods on the Registrar.

For example, if you have a quota of LenEq(5) and you want to register a name of length 5, you can
call `register_with_quota` on the Registrar:

```shell
dfx canister call registrar register_with_quota '("hello.ic", variant { LenEq = 5 })'
```

Eventually, you will get "hello.ic" registered.

### Register with Payment

You can register a name by pay DICP for it. DICP is a token that wrapped ICP into a DFT standard, see more at [DICP](DICP).

For example, if you want to register "hello.ic" with payment of 1 DICP for 5 years.

Just like ERC20, before you calling registrar to register the name, you need to call DICP canister to approve the payment.

```shell
dfx canister call dicp approve '([], "${registar_canister_id}" , 100000000:nat, [])'
```

Then, you can call `register_with_payment` on the Registrar:

```shell
dfx canister call registrar register_with_payment "(record {name = \"hello.ic\", approve_amount = 100000000:nat, years = 5:nat32})"
```

Eventually, you will get "hello.ic" registered.

Q: How can I know how much should I pay?

A: Please checkout the result of `get_price_table` on the Registrar.

## Resolving a Name

I want to resolve ICP address for a name like "hello.ic".

Canister related:

- Registry
- Resolver

First, you need to get resolver of the name, then you can call `get_resolver` method on the Registry:

```shell
dfx canister call registry get_resolver "(\"hello.ic\")"
```

Then you can call `get_record_value` method on the Resolver:

```shell
dfx canister call "resolver canister id from above" get_record_value "(\"hello.ic\")"
```

Then you can get all values from result and find the value with key `principal.icp`.

You can find more keys from [Resolver Keys](ResolverKeys).

## Updating a Resolving Record

I want to update the resolving record for a name like "hello.ic" with key `principal.icp` to "0x12345678".

Canister related:

- Registry
- Resolver

First, you need to get resolver of the name, then you can call `get_resolver` method on the Registry:

Then you can call `set_record_value` method on the Resolver:

```shell
dfx canister call resolver set_record_value '("hello.ic", vec { record {"principal.icp"; "0x12345678"} })'
```

Then everything is done.

## Delete a Resolving Record

I want to delete value of `principal.icp` for a name like "hello.ic".

You can do as [Updating](#updating-a-resolving-record) by sending an empty value with key `principal.icp`.

```shell
dfx canister call resolver set_record_value '("hello.ic", vec { record {"principal.icp"; ""} })'
```
