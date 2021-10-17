<script lang="ts">
import client from "$utils/feathers";

import Button from "$components/Button.svelte";
import Input from "$components/Input.svelte";

let firstName : string = '';
let lastName : string = '';
let email : string = '';
let password : string = '';
let passwordConfirm : string = '';
let disabled : boolean = false;

async function handleSubmit(e : Event) {
  e.preventDefault();
  
  if (passwordConfirm !== password) return;

  try {
    await client.service('users').create({
      firstName,
      lastName,
      email,
      password,
    });
    
    console.log('Successfully created user!');
  } catch (error) {
    console.log(error);
  }
}

</script>

<div class="">
  <h1 class="text-2xl mb-6">Create new account!</h1>
  <form class="flex flex-col gap-y-4" on:submit={handleSubmit}>
    <Input placeholder='First name' type='text' required bind:value={firstName}/>
    <Input
      placeholder='Last name' type='text'
      required
      bind:value={lastName}
    />
    <Input placeholder="Email" type="email" required="required" bind:value={email} />
    <Input
      placeholder="Password"
      type="password"
      required="required"
      bind:value={password}
    />
    <Input
      placeholder="Password Confirm"
      type="password"
      required="required"
      bind:value={passwordConfirm}
    />
    <Button type="submit" {disabled}>Register Account</Button>
  </form>
  <hr />
  <div class="flex flex-col gap-y-1">
    <a class="link" href="/forgot">Forgot Password?</a>
    <a class="link" href="/login"
      >Already have account? Login!</a
    >
  </div>
</div>