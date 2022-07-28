# Resolver Keys

Actualy, you can use any key you want in a resolving record. This doc is just a reference for well-knoewed keys in public resolver.

## Keys with Canister-Side Validation

There are some keys that will be validated on the canister side when setting a resolving record.

| Key            | Description                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------- |
| token.eth      | ETH address                                                                                    |
| token.btc      | BTC address                                                                                    |
| token.icp      | Principal or AccountId for ICP. obsolete: split into two keys principal.icp and account_id.icp |
| token.ltc      | LTC address                                                                                    |
| canister.icp   | canister principal you want to redirect to when resolving this name as a web domain            |
| principal.icp  | ICP Principal                                                                                  |
| account_id.icp | ICP AccountId                                                                                  |

## Keys without Canister-Side Validation

These keys are not validated on the canister side when setting a resolving record, that means you can set any value in the record.

| Key                                   | Description                                              |
| ------------------------------------- | -------------------------------------------------------- |
| email                                 | Email (1)                                                |
| url                                   | A url that you want to redirect when resolving this name |
| avatar                                | Avatar url (1)                                           |
| description                           | Description (1)                                          |
| notice                                | Notice (1)                                               |
| keywords                              | Keywords (1)                                             |
| location                              | Location (1)                                             |
| display_name                          | DisplayName (1)                                          |
| com.twitter                           | Twitter url (1)                                          |
| com.github                            | Github url (1)                                           |
| com.facebook                          | Facebook url (1)                                         |
| com.medium                            | Medium url (1)                                           |
| com.discord                           | Discord url (1)                                          |
| com.telegram                          | Telegram url (1)                                         |
| com.instagram                         | Instagram url (1)                                        |
| com.reddit                            | Reddit url (1)                                           |
| com.dscvr                             | Dscvr url (1)                                            |
| com.distrikt                          | Distrikt url (1)                                         |
| com.relation                          | Relation url (1)                                         |
| com.openchat                          | Openchat url (1)                                         |
| settings.reverse_resolution.principal |                                                          |

(1) The value of this key is display on your name.ic.dance profile page.

## Other Keys

Actually, you can use any key you want in a resolving record. There are some limitations:

- Max length of value is 512 characters.
- Max length of key is 64 characters.
- Max count of resolving records in a name is 30.

For exmaple, you can set a resolving record with key `phone` to "123456789" if you like.

## Resolving Convention

There are some rules for resolving a name to make sure every client can resolve the name as the same rule.

### Resolving to Web Url

As you know, a name can be resolved to a web url to make your visit the url in a web browser or some apps.

[ICNaming browser extension](https://chrome.google.com/webstore/detail/ic-naming-extensions/oepbpdamkigabminkagecahfgdgbbodc) is one of the clients to enable users to visit the url by typing a name.

To resolve a name to a web url, you can use the following keys:

1. Resolving with key `url` and redirect to it, if empty, move next.
2. Resolving with key `icp.canister` and redirect to `${icp.canister}.raw.ic0.app`, if empty, move next.
3. Redirect to `https://app.icnaming.com`.

### Resolving to ICP Ledger AccountId

A name can be resolved to an ICP Ledger AccountId to enable user to transfer ICP to the account.

To resolve a name to an ICP Ledger AccountId, you can use the following keys:

1. Resolving with key `principal.icp` and use it as target accountId, if empty, move next.
2. Resolving with key `account_id.icp` and use it as target accountId, if empty, move next.
3. Failed to resolve.

### Reverse Resolution Principal to Name

Reverse resolution is a feature to reverse resolve a name from a principal.

When user set a resolving record with key `settings.reverse_resolution.principal`, the name will be resolved to the principal.

To set this value, you need to be the owner of the principal and name.

If a user ownes multiple names, there can be only a resolveing record with key `settings.reverse_resolution.principal` among them.

To reverse resolve a name from a principal, you can use `reverse_resolve_principal` method in `resolver` canister.

For example, you can set a resolving record with key `settings.reverse_resolution.principal` to "my-principal" for name "hello.ic".

Then, the result of `reverse_resolve_principal("my-principal")` will be "hello.ic".
