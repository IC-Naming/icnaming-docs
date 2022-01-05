# Resolver

A resolver is a canister that maps from name to resource (e.g., cryptocurrency addresses, content hash, etc). Resolvers are pointed to by the resolver field of the registry.

## DID

```rust
type ErrorInfo = record { code : nat32; message : text };
type Result = variant { Ok : bool; Err : ErrorInfo };
type Result_1 = variant { Ok : vec record { text; text }; Err : ErrorInfo };
service : {
  /// Ensure the resolver is created.
  /// Returns true if the resolver is created, false otherwise.
  ///
  /// * `name` - a name. e.g. `hello.icp`
  ensure_resolver_created : (text) -> (Result);

  /// Get the values for the name
  /// Returns a map of values.
  /// 
  /// * `name` - a name. e.g. `hello.icp`
  get_record_value : (text) -> (Result_1) query;

  /// Set the record values for the name
  /// Returns true if the record is set, false otherwise.
  ///
  /// * `name` - a name. e.g. `hello.icp`
  /// * `values` - a list of values. e.g. `canister.icp`
  set_record_value : (text, vec record { text; text }) -> (Result);
}
```