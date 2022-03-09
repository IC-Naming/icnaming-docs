---
sidebar_position: 99
---

# Glossary

## Registrar

A registrar is a canister responsible for allocating domains.

## Registry

The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live.

## Resolver

A resolver is a canister that maps from name to resource (e.g., cryptocurrency addresses, content hash, etc). Resolvers are pointed to by the resolver field of the registry.

## Public Resolver

A Public Resolver is a resolver that owned by IC Naming and can be used by anyone to resolve names.

## Name Quota

A Name Quota is what you need to register a name. (e.g. LenEq(3) to register a name of length 3). Users can get quota by paying to the registrar or getting it from some vendor.