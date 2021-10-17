<script>
import { browser } from "$app/env";

import { goto } from "$app/navigation";
import user from "$stores/user";
export let shouldBeLoggedIn = true;
export let redirectPath = '/login';

$: if (!$user.isLoggedIn === shouldBeLoggedIn && browser) {
  goto(redirectPath);
}
</script>

{#if $user.isLoggedIn === shouldBeLoggedIn}
  <slot />
{/if}
