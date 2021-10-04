<script lang="ts">
import feathers from "@feathersjs/client";

import client from "../utils/feathers";
import { onMount } from "svelte";
import "../app.css";

onMount(() => {
  client.configure(
    feathers.authentication({
      storage: window.localStorage,
    })
  );
});

</script>
<div class="bg-white rounded-lg py-6 px-10 shadow-100 text-center my-10 mx-6">
  <slot></slot>
  <slot name="second-col"></slot>
</div>