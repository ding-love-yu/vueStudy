<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    #app{
        padding: 8px;
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
    .oh{
        overflow: hidden;
    }
</style>
