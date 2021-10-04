<script lang="ts">
  export let value : boolean = false;
  export let label : string = '';
</script>

<div class="control">
  <input id="remember" type="checkbox" bind:checked={value}  {...$$props} />
  {#if label}
    <label for="remember">{label}</label>
  {/if}
</div>