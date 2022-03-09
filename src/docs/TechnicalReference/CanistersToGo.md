---
sidebar_position: 1
---

# Canister To Go

There are some canisters that are used by IC Naming to manage names. In this post we go through some simple scenarios to
understand how to perform business operations through their API.

## Registering a Name

I want to register a name like "hello.icp".

Canister related:

- Registrar

You can register a name by calling the `register_xxx` methods on the Registrar.

For example, if you have a quota of LenEq(5) and you want to register a name of length 5, you can
call `register_with_quota` on the Registrar:

```shell
dfx canister call registrar register_with_quota "(\"hello.icp\", variant { LenEq = 5 })"
```

## Resolving a Name

I want to resolve ICP address for a name like "hello.icp".

Canister related:

- Registry
- Resolver

First, you need to get resolver of the name, then you can call `get_resolver` method on the Registry:

```shell
dfx canister call registry get_resolver "(\"hello.icp\")"
```

Then you can call `get_record_value` method on the Resolver:

```shell
dfx canister call "resolver canister id from above" get_record_value "(\"hello.icp\")"
```

Then you can get all values from result and find the value with key `token.icp`.

You can find more keys from [Resolver Keys](ResolverKeys).

## Updating a Resolving Record

I want to update the resolving record for a name like "hello.icp" with key `token.icp` to "0x12345678".

Canister related:

- Registry
- Resolver

First, you need to get resolver of the name, then you can call `get_resolver` method on the Registry:

Then you can call `set_record_value` method on the Resolver:

```shell
dfx canister call resolver set_record_value '("hello.icp", vec { record {"token.icp"; "0x12345678"} })'
```

Then everything is done.

## Delete a Resolving Record

I want to delete value of `token.icp` for a name like "hello.icp".

You can do as [Updating](#updating-a-resolving-record) by sending an empty value with key `token.icp`.

```shell
dfx canister call resolver set_record_value '("hello.icp", vec { record {"token.icp"; ""} })'
```