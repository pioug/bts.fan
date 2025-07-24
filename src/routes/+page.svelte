<script>
  import './global.css';
  const accounts = [
    {
      id: 'bts.bighitofficial'
    },
    {
      id: 'jin'
    },
    {
      id: 'agustd'
    },
    {
      id: 'uarmyhope'
    },
    {
      id: 'rkive'
    },
    {
      id: 'j.m'
    },
    {
      id: 'thv'
    },
    {
      id: 'mnijungkook'
    }
  ];
</script>

<svelte:head>
  <title>bts.fan</title>
</svelte:head>

<main>
  <section>
    {#each accounts as account (account.id)}
      <h1>
        <a href={`https://www.instagram.com/${account.id}`}>{account.id}</a>
      </h1>
    {/each}
  </section>
  <aside>
    <a class="undecorated-anchor" href="https://bit.ly/twitter-pioug">🐾</a>
  </aside>
</main>

<style>
  h1 {
    all: unset;
    font-size: 18px;
    line-height: 20px;
  }

  a {
    color: inherit;
  }

  a:not(:hover) {
    text-decoration: unset;
  }

  main {
    background: linear-gradient(135deg, #fbcabb, #f9b0c3, #e3abce, #ceb6d9, #a2c8ec);
    align-content: center;
    display: grid;
    gap: 16px;
    inset: 0;
    justify-content: center;
    position: fixed;
  }

  section {
    align-content: center;
    background: #fffe;
    border-radius: 8px;
    display: grid;
    gap: 8px;
    grid-auto-flow: row;
    justify-content: center;
    padding: 16px;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075);
  }

  aside {
    text-align: center;
  }
</style>
