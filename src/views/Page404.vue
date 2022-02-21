<template lang="html">
  <h2>This is the 404 Error Page</h2>
  <p class="text404">Page not found. Please, check the URL or go to one of the links:</p>
  <router-link :to="{ name: 'KeySkills' }">Back  to Home Page</router-link>
  <router-link :to="{ name: 'Experience' }">To Jobs List</router-link>
  <router-link :to="{ name: 'Education' }">To Jobs List</router-link>
  <router-link :to="{ name: 'Portfolio' }">To Jobs List</router-link>
</template>


<style media="screen" scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  border-radius: 4px;
}

a:hover {
  color: crimson;
    text-decoration: none;
}

a.router-link-exact-active {
  color: #fff;
  background: crimson;
}

</style>
