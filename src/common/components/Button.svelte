<script lang="ts">
export let handleClick: (e: Event) => void = () => {};
</script>

<button on:click={handleClick}  class="btn" {...$$props}><slot /></button>