<script>
  import Card from './Card.svelte'

  export let company
  export let logo
  export let employment_period
  export let summary
  export let tools
</script>

<Card>
  <slot name="header">
    <div class="job-listing-header">
      {#if logo}
        <img src={ logo } alt={ company } title={ company } width="160" height="65" class="mb-1" />
      {/if}
      <div class="">
        <p class="text-sm italic">{ employment_period }</p>
      </div>
    </div>
  </slot>
  <div class="job-summary">
      {#each summary as paragraf}
        <p>{ paragraf }</p>
      {/each}
      {#if tools}
        <h3 class="mb-2 font-bold">Tools</h3>
        <ul class="ml-4 list-disc">
          {#each tools as tool}
            <li>{ tool }</li>
          {/each}
        </ul>
      {/if}
  </div>
</Card>