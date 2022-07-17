# JS SDK

## Installing

Using npm:

```sh
npm install @dfinity/{agent,candid,principal} # dfinity needs
npm install @ic-naming/client
```

Using yarn:

```sh
yarn add @dfinity/{agent,candid,principal} # dfinity needs
yarn add @ic-naming/client
```

## Example

```js
import { Principal } from "@dfinity/principal";
import { IcNamingClient } from "@ic-naming/client";

const client = new IcNamingClient({
  net: "IC", // IC | ICP | TICP
  mode: "production", // local | production
});

// get records
client.getRecordsOfName("helloworld.ic").then((records) => {
  // get ICP address(principal)
  const principal = records.find((r) => r[0] === "principal.icp");
  console.debug(`helloworld.ic's principal is ${principal}`);

  // get ICP address(account id)
  const accountId = records.find((r) => r[0] === "account_id.icp");
  console.debug(`helloworld.ic's account id is ${accountId}`);

  // get twitter
  const twitter = records.find((r) => r[0] === "com.twitter");
  console.debug(`helloworld.ic's twitter is ${twitter}`);

  // get eth address
  const ethAdddress = records.find((r) => r[0] === "token.eth");
  console.debug(`helloworld.ic's eth adddress is ${ethAdddress}`);
});

// get name's registrant
client.getRegistrantOfName("helloworld.ic").then((registrant) => {
  console.debug(`helloworld.ic's registrant is ${registrant}`);
});

// get name's expired time
client.getExpiredTimeOfName("helloworld.ic").then((timestamp) => {
  const expiredTime = new Date(Number(timestamp));
  console.debug(`helloworld.ic's expired time is ${expiredTime}`);
});

// get reverse resolve
const thePrincipal = Principal.fromText(
  "v2xhg-um7x6-mhni4-sgqsc-qarqs-bgoyy-ngobl-qoe7c-7a4cm-bvn4f-pqe"
);

client.getReverseResolve(thePrincipal).then((name) => {
  if (name) console.debug(`reverse resolve name is ${name}`);
  else console.debug(`reverse resolve name not exist`);
});
```
