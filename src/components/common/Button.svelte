<script lang="ts">
  export const title = 'Press Me';
</script>

<button>{title}</button>

<style>
  button {
    background-color: transparent;
    border: 0.11rem solid var(--color-2);
    box-shadow: var(--shadow-elevation-medium);

    margin: var(--space-3xs-2xs);
    padding: var(--space-3xs-2xs);
  }

  button:active {
    box-shadow: var(--shadow-elevation-low);
  }
</style>
