# Registry

The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live.

## DID

```rust
type ErrorInfo = record { code : nat32; message : text };
type GetPageInput = record { offset : nat64; limit : nat64 };
type GetPageOutput = record { items : vec text };
type RegistryDto = record {
  ttl : nat64;
  resolver : principal;
  owner : principal;
  name : text;
};
type RegistryUsers = record { owner : principal; operators : vec principal };
type Result = variant { Ok : GetPageOutput; Err : ErrorInfo };
type Result_1 = variant { Ok : RegistryDto; Err : ErrorInfo };
type Result_2 = variant { Ok : principal; Err : ErrorInfo };
type Result_3 = variant { Ok : nat64; Err : ErrorInfo };
type Result_4 = variant { Ok : RegistryUsers; Err : ErrorInfo };
type Result_5 = variant { Ok : bool; Err : ErrorInfo };
service : {
  /// Get name that owned by owner
  /// Returns list of names owned by owner
  ///
  /// * `owner` - owner of names
  /// * `page` - page offset and limit
  get_controlled_names : (principal, GetPageInput) -> (Result) query;

  /// Get details of name
  /// 
  /// * `name` - a name. e.g. `hello.icp`
  get_details : (text) -> (Result_1) query;

  /// get owner of name
  /// 
  /// * `name` - a name. e.g. `hello.icp`
  get_owner : (text) -> (Result_2) query;

  /// Get resolver
  ///
  /// * `name` - a name. e.g. `hello.icp`
  get_resolver : (text) -> (Result_2) query;

  /// Get ttl of name
  /// 
  /// * `name` - a name. e.g. `hello.icp`
  get_ttl : (text) -> (Result_3) query;

  /// Get owner and operators of name
  /// 
  /// * `name` - a name. e.g. `hello.icp`
  get_users : (text) -> (Result_4) query;

  /// Set approval status of operator. Operator can be update info of subdomain.
  /// Returns true if success.
  ///
  /// * `name` - a name. e.g. `hello.icp`
  /// * `operator` - operator to be set.
  /// * `approved` - approval status of operator
  set_approval : (text, principal, bool) -> (Result_5);

  /// Set full info of subdomain
  /// Returns true if success
  /// 
  /// * `name` - a name. e.g. `hello.icp`
  /// * `ttl` - ttl of name
  /// * `resolver` - resolver of name
  set_record : (text, nat64, principal) -> (Result_5);

  /// Set owner of subdomain
  /// Returns details of the new registry
  ///
  /// * `label` - label of subdomain. e.g. `www`
  /// * `parent_name` - parent name of subdomain. e.g. `hello.icp`
  /// * `sub_owner` - owner of subdomain
  /// * `ttl` - ttl of subdomain
  /// * `resolver` - resolver of subdomain
  set_subdomain_owner : (text, text, principal, nat64, principal) -> (Result_1);

  /// TODO to be removed
  set_top_name : () -> (Result_5);
}
```