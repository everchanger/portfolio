<script>
    import Card from './Card.svelte'
  
    export let project_name
    export let demo_link
    export let source_link
    export let summary
  </script>
  
  <Card>
  <slot name="header">
    <h2 class="text-2xl mb-1">{ project_name }</h2>
    {#if demo_link}
      <div>
          <a target="_blank" rel="noopener" href={demo_link.href}>{demo_link.text}</a>
      </div>
    {/if}
    {#if source_link}
      <div class="mb-4">
          <a target="_blank" rel="noopener" href={source_link.href}>{source_link.text}</a>
      </div>
    {/if}
  </slot>
  {#each summary as paragraf}
    <p>{ paragraf }</p>
  {/each}
</Card>
