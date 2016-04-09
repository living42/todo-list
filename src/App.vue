<template>
  <div class="container">
    <div id="main">
      <list></list>
    </div>
  </div>
</template>

<script>
import List from './components/List'

export default {
  components: {
    List
  }
}
</script>

<style>
  #main {
    max-width: 400px;
    margin-top: 75px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
