import { browser } from "$app/env";
import client from "$utils/feathers";
import { writable } from "svelte/store";

const user = writable({
  isLoggedIn: false
});

if (browser) {
  client.reAuthenticate().then((data) => {
    user.set({
      ...data,
      isLoggedIn: true
    });
  }).catch(() => {
    user.set({
      isLoggedIn: false
    });
  });

  client.on('logout', () => {
    user.set({
      isLoggedIn: false
    });
  });

  client.on('authenticated', async (result: boolean): Promise<void> => {
    try {
      const data = await client.get('authentication');
      user.set({
        ...data.user,
        isLoggedIn: result,
      });
    } catch (error) {
      user.set({
        isLoggedIn: false
      });
    }
  });
}

export default user;
