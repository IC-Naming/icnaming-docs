# Registrar

A registrar is a canister responsible for allocating domains. Canister to manage registration of names.

## DID

```rust
service : {
  /// Check if name is available.
  /// Returns true if name is available.
  ///
  /// * `name` - name to check, e.g. "hello.icp"
  available : (text) -> (BooleanActorResponse) query;
  /// Get details for a name.
  /// Returns details for a name.
  ///
  /// * `name` - name to get details for
  get_details : (text) -> (GetDetailsActorResponse) query;
  /// Get expiration date for a name.
  /// Returns expiration date.
  ///
  /// * `name` - name to get, e.g. "hello.icp"
  get_name_expires : (text) -> (GetNameExpiresActorResponse) query;
  /// Get names for a owner.
  /// Returns names for a owner.
  ///
  /// * `owner` - owner to get names for
  /// * `page` - page offset and limit
  get_names : (principal, GetPageInput) -> (GetNamesActorResponse) query;
  /// get owner for a name.
  /// Returns owner for a name.
  ///
  /// * `name` - name to get owner for
  get_owner : (text) -> (GetOwnerActorResponse) query;
  /// Register a name for a owner. This is private method for activity client.
  /// Returns true if name is registered successfully.
  ///
  /// * `name` - name to register, e.g. "hello.icp"
  /// * `owner` - owner to register the name for
  /// * `years` - number of years to register the name for
  register_for : (text, principal, nat64) -> (BooleanActorResponse);
  /// Register a name for a caller with a quota.
  /// Returns true if name is registered successfully.
  ///
  /// * `name` - name to register, e.g. "hello.icp"
  /// * `quota_type` - quota type to use
  register_with_quota : (text, QuotaType) -> (BooleanActorResponse);
}
type BooleanActorResponse = variant { Ok : bool; Err : ErrorInfo };
type ErrorInfo = record { code : nat32; message : text };
type GetDetailsActorResponse = variant {
  Ok : RegistrationDetails;
  Err : ErrorInfo;
};
type GetNameExpiresActorResponse = variant { Ok : nat64; Err : ErrorInfo };
type GetNamesActorResponse = variant { Ok : GetPageOutput; Err : ErrorInfo };
type GetOwnerActorResponse = variant { Ok : principal; Err : ErrorInfo };
type GetPageInput = record { offset : nat64; limit : nat64 };
type GetPageOutput = record { items : vec RegistrationDto };
type QuotaType = variant { LenEq : nat8; LenGte : nat8 };
type RegistrationDetails = record {
  owner : principal;
  name : text;
  created_at : nat64;
  expired_at : nat64;
};
type RegistrationDto = record {
  name : text;
  created_at : nat64;
  expired_at : nat64;
};
```