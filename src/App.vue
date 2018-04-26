<template>
  <div id="app">
        <Header/>
        <Subheader/>
        <div class="split">
          <Aside/>
          <Main/>
        </div>
        <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Subheader from '@/components/Subheader'
import Main from '@/components/Main'
import Aside from '@/components/Aside'


export default {
  name: 'App',
  components: {
    Header,
    Subheader,
    Main,
    Aside
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Nanum+Gothic:700');
#app {
    background-color:#f7f8f3;
  color: #222;
      font-family: 'Fira Sans', sans-serif;
      font-weight: 400;
      height: 100vh;
            min-width: 100vw;
      z-index: -9999 !important;
}

.split {
display: flex;
justify-content: space-between;
}

</style>
