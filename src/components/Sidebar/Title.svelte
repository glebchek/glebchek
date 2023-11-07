<script lang="ts">
  export let name: string | undefined;
  export let position: string | undefined;
</script>

<div>
  <h1>{name ?? 'Example Name'}</h1>
  <h3>{position ?? 'Example Position'}</h3>
</div>
