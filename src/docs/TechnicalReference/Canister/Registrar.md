# Registrar

A registrar is a canister responsible for allocating domains. Canister to manage registration of names.

## DID

```rust
type ErrorInfo = record { code : nat32; message : text };
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
type Result = variant { Ok : bool; Err : ErrorInfo };
type Result_1 = variant { Ok : RegistrationDetails; Err : ErrorInfo };
type Result_2 = variant { Ok : nat64; Err : ErrorInfo };
type Result_3 = variant { Ok : GetPageOutput; Err : ErrorInfo };
type Result_4 = variant { Ok : principal; Err : ErrorInfo };
type Result_5 = variant { Ok : nat32; Err : ErrorInfo };
service : {
  /// Add quotas to a quota owner.
  /// Returns true if quotas are added successfully.
  ///
  /// * `quota_owner` - owner to add quotas to
  /// * `quota_type` - quota type to add
  /// * `diff` - number of quotas to add
  add_quota : (principal, QuotaType, nat32) -> (Result);

  /// Check if name is available.
  /// Returns true if name is available.
  ///
  /// * `name` - name to check, e.g. "hello.icp"
  available : (text) -> (Result) query;

  /// Get details for a name.
  /// Returns details for a name.
  ///
  /// * `name` - name to get details for
  get_details : (text) -> (Result_1) query;

  /// Get expiration date for a name.
  /// Returns expiration date.
  ///
  /// * `name` - name to get, e.g. "hello.icp"
  get_name_expires : (text) -> (Result_2) query;

  /// Get names for a owner.
  /// Returns names for a owner.
  ///
  /// * `owner` - owner to get names for
  /// * `page` - page offset and limit
  get_names : (principal, GetPageInput) -> (Result_3) query;

  /// get owner for a name.
  /// Returns owner for a name.
  ///
  /// * `name` - name to get owner for
  get_owner : (text) -> (Result_4) query;

  /// Get quotas for a quota owner.
  /// Returns quotas for a quota owner.
  ///
  /// * `quota_owner` - owner to get quotas for
  /// * `quota_type` - quota type to get
  get_quota : (principal, QuotaType) -> (Result_5) query;

  /// Register a name for a owner. This is private method for activity client.
  /// Returns true if name is registered successfully.
  ///
  /// * `name` - name to register, e.g. "hello.icp"
  /// * `owner` - owner to register the name for
  /// * `years` - number of years to register the name for
  register_for : (text, principal, nat64) -> (Result);

  /// Register a name for a caller with a quota.
  /// Returns true if name is registered successfully.
  ///
  /// * `name` - name to register, e.g. "hello.icp"
  /// * `quota_type` - quota type to use
  register_with_quota : (text, QuotaType) -> (Result);

  /// Remove quotas from a quota owner.
  /// Returns true if quotas are removed successfully.
  ///
  /// * `quota_owner` - owner to remove quotas from
  /// * `quota_type` - quota type to remove
  /// * `diff` - number of quotas to remove
  sub_quota : (principal, QuotaType, nat32) -> (Result);
}
```