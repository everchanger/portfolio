<script>
  export let header = 'Header'
  export let skills = []
</script>

<div class={$$props.class}>
  <h3 class="mb-2 font-bold">{ header }</h3>
  <ul>
    {#each skills as skill}
    <li>{ skill }</li>
    {/each}
  </ul>
</div>