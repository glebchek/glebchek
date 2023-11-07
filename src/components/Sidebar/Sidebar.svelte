<script lang="ts">
  import Section from '../common/Section.svelte';
  import Title from './Title.svelte';

  import type { ResumeSchema } from '@kurone-kito/jsonresume-types';

  export let basics: ResumeSchema['basics'];
</script>

<header>
  <Title name={basics?.name} position={basics?.label} />

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
