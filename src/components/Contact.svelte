<script>
  export let header;
  export let content;
  export let href;
</script>

<a class={"link h-12 flex flex-col " + $$props.class} {href}>
  <p class="font-medium text-orange-700 text-normal">{header}</p>
  <p class="">{content}</p>
</a>
