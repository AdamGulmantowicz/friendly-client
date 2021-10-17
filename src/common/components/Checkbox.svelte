<script lang="ts">
  export let checked : boolean = false;
  export let label : string = '';
</script>

<div class="control">
  <input id="remember" type="checkbox" bind:checked={checked} {...$$props} />
  {#if label}
    <label for="remember">{label}</label>
  {/if}
</div>