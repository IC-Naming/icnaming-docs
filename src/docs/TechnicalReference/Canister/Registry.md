# Registry

The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live.

## DID

```rust
service : {
  /// Get name that owned by owner
  /// Returns list of names owned by owner
  ///
  /// * `owner` - owner of names
  /// * `page` - page offset and limit
  get_controlled_names : (principal, GetPageInput) -> (
      GetControlledNamesResponse,
    ) query;
  /// Get details of name
  ///
  /// * `name` - a name. e.g. `hello.ic`
  get_details : (text) -> (GetDetailsResponse) query;
  /// Get owner of name
  ///
  /// * `name` - a name. e.g. `hello.ic`
  get_owner : (text) -> (GetOwnerResponse) query;
  /// Get resolver
  ///
  /// * `name` - a name. e.g. `hello.ic`
  get_resolver : (text) -> (GetOwnerResponse) query;
  /// Get ttl of name
  ///
  /// * `name` - a name. e.g. `hello.ic`
  get_ttl : (text) -> (GetTtlResponse) query;
  /// Get owner and operators of name
  ///
  /// * `name` - a name. e.g. `hello.ic`
  get_users : (text) -> (GetUsersResponse) query;
  /// Set approval status of operator. Operator can be update info of subdomain.
  /// Returns true if success.
  ///
  /// * `name` - a name. e.g. `hello.ic`
  /// * `operator` - operator to be set.
  /// * `approved` - approval status of operator
  set_approval : (text, principal, bool) -> (BooleanActorResponse);
  /// Set full info of subdomain
  /// Returns true if success
  ///
  /// * `name` - a name. e.g. `hello.ic`
  /// * `ttl` - ttl of name
  /// * `resolver` - resolver of name
  set_record : (text, nat64, principal) -> (BooleanActorResponse);
  /// Set owner of subdomain
  /// Returns details of the new registry
  ///
  /// * `label` - label of subdomain. e.g. `www`
  /// * `parent_name` - parent name of subdomain. e.g. `hello.ic`
  /// * `sub_owner` - owner of subdomain
  /// * `ttl` - ttl of subdomain
  /// * `resolver` - resolver of subdomain
  set_subdomain_owner : (text, text, principal, nat64, principal) -> (
      GetDetailsResponse,
    );
}
type BooleanActorResponse = variant { Ok : bool; Err : ErrorInfo };
type ErrorInfo = record { code : nat32; message : text };
type GetControlledNamesResponse = variant {
  Ok : GetPageOutput;
  Err : ErrorInfo;
};
type GetDetailsResponse = variant { Ok : RegistryDto; Err : ErrorInfo };
type GetOwnerResponse = variant { Ok : principal; Err : ErrorInfo };
type GetPageInput = record { offset : nat64; limit : nat64 };
type GetPageOutput = record { items : vec text };
type GetTtlResponse = variant { Ok : nat64; Err : ErrorInfo };
type GetUsersResponse = variant { Ok : RegistryUsers; Err : ErrorInfo };
type RegistryDto = record {
  ttl : nat64;
  resolver : principal;
  owner : principal;
  name : text;
};
type RegistryUsers = record { owner : principal; operators : vec principal };
```