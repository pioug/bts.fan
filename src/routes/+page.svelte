<svelte:head>
  <title>bts.fan</title>
  <meta name="color-scheme" content="light dark" />
  <meta name="twitter:widgets:theme" content="light" />
  <script>
    document
      .querySelector('meta[name="twitter:widgets:theme"]')
      ?.setAttribute(
        'content',
        matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      );
  </script>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<main>
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">
      replay c0mback
      <a href="https://t.co/wqvj3rbeqQ">pic.twitter.com/wqvj3rbeqQ</a>
    </p>
    &mdash; BTS LINK⁷ (@btslinkita)
    <a href="https://twitter.com/btslinkita/status/2035333324013453463?ref_src=twsrc%5Etfw">
      March 21, 2026
    </a>
  </blockquote>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" fill="none" viewBox="0 0 100 32"
    ><path
      fill="#ff1340"
      d="M15.8 0a15.8 15.8 0 1 0 0 31.7 15.8 15.8 0 0 0 0-31.7m3.8 17.5c-1.3 3-5.9 3.1-7.4 0a4 4 0 0 1 3-5.7 4 4 0 0 1 4.4 5.7M34.2 15.8q0 2 .5 4h30.7a16 16 0 0 0-.1-8.2H34.7q-.5 2.1-.5 4.2M43 23.6q-2 0-3.7-.5c-2.3-.5-3.6-1.4-4.2-1.8a15.8 15.8 0 0 0 28.7 2.3zM57.4 8.1a16 16 0 0 1 7.4 2.1 15.8 15.8 0 0 0-28.6-2zM85.3 19.8h14.2a16 16 0 0 0 0-8.2H85.2zM91 8.1c1.3 0 3 .3 4.3.6q2.7.7 3.7 1.5a15.8 15.8 0 0 0-28.7-2zM82.8 11.6h-14a16 16 0 0 0 0 8.2h14zM77.4 23.6a17 17 0 0 1-5-.8q-2-.8-3-1.4A15.8 15.8 0 0 0 98 23.6z"
    /></svg
  >
</main>

<style>
  :global(body) {
    margin: 0;
    min-height: 100dvh;
    background: light-dark(#fff, #111);
  }

  :global(*) {
    box-sizing: border-box;
  }

  main {
    display: grid;
    gap: 24px;
    justify-items: center;
    align-content: center;
    min-height: 100dvh;
    width: 100%;
  }

  svg {
    width: 100px;
    height: auto;
  }

  :global(.twitter-tweet) {
    margin: 0 auto !important;
  }

  :global(.twitter-tweet iframe) {
    color-scheme: auto;
  }
</style>
