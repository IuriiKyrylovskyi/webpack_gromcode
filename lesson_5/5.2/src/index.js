// file path: src/index.js

import fetchUser from "./profile/gateway.js";
import { printProfile } from "./profile/index.js";

fetchUser("grace").then((userData) =>
  printProfile({
    name: userData.name,
    location: userData.location,
  })
);
