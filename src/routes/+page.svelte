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
  <ul>
    {#each accounts as account (account.id)}
      <li>
        <a href={`https://www.instagram.com/${account.id}`}>{account.id}</a>
      </li>
    {/each}
  </ul>
  <aside>
    <a class="undecorated-anchor" href="https://bit.ly/twitter-pioug">🦄</a>
  </aside>
</main>

<style>
  li {
    all: unset;
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 32px;
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

  ul {
    align-content: center;
    color: #fff;
    display: grid;
    gap: 8px;
    grid-auto-flow: row;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 16px;
    text-shadow:
      0 6px 20px rgba(0, 0, 0, 0.4),
      0 12px 40px rgba(0, 0, 0, 0.25);
  }

  aside {
    text-align: center;
  }
</style>
