<script lang="ts">
import user from "$stores/user";
import "../app.css";
import Button from "$components/Button.svelte";
import client from "$utils/feathers";
</script>

<div class="bg-white rounded-lg py-6 px-10 shadow-100 text-center my-10 mx-6">
  {#if $user.isLoggedIn}
    <Button handleClick={(e) => {
      e.preventDefault();
      console.log('click!');
      client.logout()
    }}>Logout</Button>
  {:else}
    <a class="link" href="/login">Login</a>
  {/if}
  <slot></slot>
  <slot name="second-col"></slot>
</div>