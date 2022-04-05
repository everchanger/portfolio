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
        <h2 class="hidden text-2xl sm:block">{ company }</h2>
        <p class="text-sm italic">{ employment_period }</p>
      </div>
      {#if logo}
        <img src={ logo } alt={ company } width="160" height="65" class="order-1 mb-1 sm:order-2 sm:mb-0" />
      {/if}
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