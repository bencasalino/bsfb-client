<template>
  <div id="app">
        <Header/>
        <div id="split">
          <Aside/>
          <Main/>
        </div>
        <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Aside from '@/components/Aside'


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Aside
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Nanum+Gothic:700');
    #app {
    color: #222;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    height: 100vh;
    width: 100vw;
    }
    #split {
    z-index: 1 !important;
          display: flex;
          background-color: #222;
    }



</style>
