export async function load() {
  const response = await fetch('https://pioug.github.io/bts.fan/instagram.json');
  const json = await response.json();
  return json;
}
