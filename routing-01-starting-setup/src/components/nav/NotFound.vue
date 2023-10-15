<template>
  <div>
    <h2>You've found a page that doesn't exist.</h2>
    <p>
      Feel free to go back to <router-link to="/teams">Teams</router-link> page.
    </p>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #11005c;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
}
</style>
