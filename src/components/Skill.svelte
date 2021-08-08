<script>
  export let header = 'Header'
  export let skills = []
</script>

<div class={$$props.class}>
  <h3>{ header }</h3>
  <ul>
    {#each skills as skill}
    <li>{ skill }</li>
    {/each}
  </ul>
</div>