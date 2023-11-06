<div class="with-sidebar">
  <slot name="sidebar" />
  <slot name="content" />
</div>

<style>
  .with-sidebar {
    display: flex;
    flex-wrap: wrap;
  }

  .with-sidebar > :global(*):first-child {
    flex-grow: 1;
    flex-basis: 15rem;
  }

  .with-sidebar > :global(*):last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 50%;
  }
</style>
