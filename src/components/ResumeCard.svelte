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
      <div class="order-2 sm:order-1">
        <h2 class="text-2xl hidden sm:block">{ company }</h2>
        <p class="italic text-sm">{ employment_period }</p>
      </div>
      {#if logo}
        <img src={ logo } alt={ company } width="160" height="65" class="mb-1 order-1 sm:order-2 sm:mb-0" />
      {/if}
    </div>
  </slot>
  <div class="job-summary">
      {#each summary as paragraf}
        <p>{ paragraf }</p>
      {/each}
      {#if tools}
        <h3 class="font-bold mb-2">Tools</h3>
        <ul class="ml-4 list-disc">
          {#each tools as tool}
            <li>{ tool }</li>
          {/each}
        </ul>
      {/if}
  </div>
</Card>