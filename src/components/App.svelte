<script lang="ts">
  import Content from './Content.svelte';
  import Sidebar from './Sidebar.svelte';
  import WithSidebar from './common/WithSidebar.svelte';

  import '../css/css-reset.css';
  import '../css/global-style.css';
</script>

<div>
  <WithSidebar>
    <Sidebar slot="sidebar" />
    <Content slot="content" />
  </WithSidebar>
</div>

<style>
  @import '~@ibm/plex/css/ibm-plex.min.css';

  div {
    height: 100%;
    box-shadow: var(--shadow-elevation-low);
    margin-left: auto;
    margin-right: auto;
    max-width: 70rem;
  }

  :global(body) {
    background-color: var(--color-6);

    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  }
</style>
