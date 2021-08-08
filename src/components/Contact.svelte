<script>
  export let header
  export let content
  export let href
</script>

<a class={'link h-12 flex flex-col ' + $$props.class} href={ href }>
  <p class="text-sm font-medium">{ header }</p>
  <p class="ml-2">{ content }</p>
</a>