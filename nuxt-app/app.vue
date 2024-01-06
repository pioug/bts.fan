<template>
  <main>
    <section>
      <div v-for="account in accounts" class="account">
        <div>
          <h1>
            <component :is="account.id === 'jungkook.97' ? 'span' : 'a'" :href="'https://www.instagram.com/' + account.id"
              >@{{ account.id }}</component>
          </h1>
        </div>
        <div>
          <h2>{{ format(account.followers) }} 👯</h2>
        </div>
      </div>
    </section>
    <aside>
      <a class="undecorated-anchor" href="https://bit.ly/twitter-pioug">🐾</a>
    </aside>
  </main>
</template>

<script setup>
useHead({
  title: "bts.fan",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
});

const { data } = await useFetch(
  "https://pioug.github.io/bts.fan/instagram.json"
);
const accounts = data.value.data;

const numberFormat = new Intl.NumberFormat();

function format(value) {
  return numberFormat.format(value);
}
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
}
</style>

<style scoped>
h1,
h2 {
  all: unset;
}

h1 {
  font-size: 18px;
  line-height: 20px;
}

h2 {
  font-size: 14px;
  line-height: 16px;
}

.undecorated-anchor {
  text-decoration: unset;
}

main {
  background: linear-gradient(
    135deg,
    #fbcabb,
    #f9b0c3,
    #e3abce,
    #ceb6d9,
    #a2c8ec
  );
  align-content: center;
  display: grid;
  gap: 16px;
  inset: 0;
  justify-content: center;
  position: fixed;
  text-align: center;
}

section {
  align-content: center;
  background: #fffe;
  border-radius: 8px;
  display: grid;
  gap: 16px;
  grid-auto-flow: row;
  justify-content: center;
  padding: 16px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
}

.account {
  align-items: center;
  display: flex;
  gap: 8px;
}
</style>
