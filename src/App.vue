<template>
  <div id="app">
      <Editores></Editores>
  </div>
</template>

<script>
import Editores from './components/editores/Editores'

export default {
    name: 'app',
    components: {
        Editores
    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}
</style>
