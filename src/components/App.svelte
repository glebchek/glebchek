<script lang="ts">
  import Content from './Content';
  import Sidebar from './Sidebar';
  import WithSidebar from './common/WithSidebar.svelte';

  import '../css/css-reset.css';
  import '../css/global-style.css';

  import { onMount } from 'svelte';
  import type { ResumeSchema } from '@kurone-kito/jsonresume-types';

  let resumeData: ResumeSchema;

  onMount(async () => {
    try {
      const response = await fetch('/resume.json');
      resumeData = await response.json();
    } catch (error) {
      console.log(error);
    }
  });
</script>

{#if resumeData}
  <div>
    <WithSidebar sidebarWidth="20rem">
      <Sidebar basics={resumeData?.basics} slot="sidebar" />
      <Content slot="content" />
    </WithSidebar>
  </div>
{:else}
  <p>loading</p>
{/if}

<style>
  @import '~@ibm/plex/css/ibm-plex.min.css';

  @page {
    margin: 0;
  }

  div {
    /* @link https://utopia.fyi/clamp/calculator?a=1120,1920,0—64 */
    --fluid-0-64: clamp(0rem, -5.6rem + 8vw, 4rem);

    height: 100%;
    box-shadow: var(--shadow-elevation-low);
    margin-top: var(--fluid-0-64);
    margin-left: auto;
    margin-right: auto;
    max-width: 70rem;
  }

  :global(body) {
    background-color: var(--color-6);

    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  }
</style>
