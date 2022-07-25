# Resolver

A resolver is a canister that maps from name to resource (e.g., cryptocurrency addresses, content hash, etc). Resolvers are pointed to by the resolver field of the registry.

## DID

```rust
service : {
  /// Get the values for the name
  /// Returns a map of values.
  ///
  /// * `name` - a name. e.g. `hello.ic`
  get_record_value : (text) -> (GetRecordValueResponse) query;
  /// Set the record values for the name
  /// Returns true if the record is set, false otherwise.
  ///
  /// * `name` - a name. e.g. `hello.ic`
  /// * `values` - a list of values. e.g. `canister.icp`
  set_record_value : (text, vec record { text; text }) -> (
      BooleanActorResponse,
    );
}
type BooleanActorResponse = variant { Ok : bool; Err : ErrorInfo };
type ErrorInfo = record { code : nat32; message : text };
type GetRecordValueResponse = variant {
  Ok : vec record { text; text };
  Err : ErrorInfo;
};
```