<script lang="ts">
  export let title: string;
</script>

<section>
  <h2>{title}</h2>
  <div><slot /></div>
</section>

<style>
  h2 {
    font-weight: normal;
  }
</style>
