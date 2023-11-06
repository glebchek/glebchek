<script lang="ts">
  import Section from '../common/Section.svelte';
  import Title from './Title.svelte';
</script>

<header>
  <Title name="Gleb Chekushin" position="Frontend developer" />

  <Section title="Profile" />
  <Section title="Education" />
  <Section title="Skills" />
</header>

<style>
  header {
    color: var(--color-2);
    background-color: var(--color-5);
    padding: var(--space-s-m);
  }
</style>
