<template>
  <div class="c-dashboard">
    <h1>{{title}}</h1>
    <div class="list-creation-wrapper">
      <div class="list-creation"></div>
      <div class="list-creation"></div>
    </div>
    <div class="all-elements-wrapper">
      <div class="unassinged-elements">
        <ul class="list"></ul>
      </div>
      <div class="assinged-elements">
        <ul class="list"></ul>
        <ul class="list"></ul>
        <ul class="list"></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => {
    return {
      title: 'Spaß mit Listen'
    };
  }
}
</script>

<style src="./dashboard.scss" lang="scss">
</style>
