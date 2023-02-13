<script lang="ts">
  export let stackSpace: string;
</script>

<div class="stack" style:--stack-space={stackSpace}><slot /></div>

<style>
  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stack > ::global(*) {
    margin-block: 0;
  }

  .stack > :global(* + *) {
    margin-block-start: var(--stack-space);
  }
</style>
