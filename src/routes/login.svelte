<script lang="ts">
import Input from "$components/Input.svelte";
import Button from "$components/Button.svelte";
import Checkbox from "$components/Checkbox.svelte";
import client from "$utils/feathers";
import PrivateRoute from "$components/PrivateRoute.svelte";
let email : string = '';
let password : string = '';
let agreement : boolean = false;
let disabled : boolean = false;

async function handleSubmit(e : Event) {
  e.preventDefault();

  if (!email && !password) return;
  disabled = true;
  
  try {
    await client.authenticate({
      strategy: 'local',
      email,
      password
    })
  } catch (error) {
    console.log(error.message);
  } finally {
    disabled = false;
  }
}

</script>

<PrivateRoute shouldBeLoggedIn={false} redirectPath="/">
  <div class="">
    <h1 class="text-2xl mb-6">Welcome back!</h1>
    <form class="flex flex-col gap-y-4" on:submit={handleSubmit}>
      <Input placeholder="Email" type="email" required="required" bind:value={email}/>
      <Input
        placeholder="Password"
        type="password"
        required="required"
        bind:value={password}
      />
      <Checkbox
        label="Remember me"
        bind:checked={agreement}
      />
      <Button type="submit" {disabled}>Login</Button>
    </form>
    <hr />
    <div class="flex flex-col gap-y-1">
      <a class="link" href="/forgot">Forgot Password?</a>
      <a class="link" href="/register"
        >Create new account!</a
      >
    </div>
  </div>
</PrivateRoute>
