<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/"><strong class="is-size-4">Pupily</strong></a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-dark"><strong>Sign In</strong></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
	 margin-top: 25px;
	 margin-bottom: 30px;
}
 nav a {
	 font-weight: bold;
	 color: #2c3e50;
}
 nav a.router-link-exact-active {
	 color: #d88d00;
}
</style>
