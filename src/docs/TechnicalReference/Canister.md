# Canister DID

## Registrar

A registrar is a canister responsible for allocating domains. Canister to manage registration of names.

<https://icscan.io/canister/ft6xr-taaaa-aaaam-aafmq-cai>

## Registry

The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live.

<https://icscan.io/canister/f542z-iqaaa-aaaam-aafnq-cai>

## Resolver

A resolver is a canister that maps from name to resource (e.g., cryptocurrency addresses, content hash, etc). Resolvers are pointed to by the resolver field of the registry.

<https://icscan.io/canister/fi3lu-jyaaa-aaaam-aafoa-cai>
