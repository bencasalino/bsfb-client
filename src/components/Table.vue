<template>
<div id="Wrapper">
      <div class="row">
      <div class="id">  ID  <br> </div>
      <div class="name"> MANAGER <br> </div>
      <div class="box"> TEAM NAME <br> </div>
      <div class="bignumber"> JOINED <br> </div>
      <div class="status"> STATUS <br> </div>
      <div class="bignumber">   PTS <br> </div>
      <div class="number">   WINS <br> </div>
      <div class="number">   LOSS <br> </div>
      <div class="number">   GAMES <br> </div>
      <div class="number">   PLAYOFFS <br> </div>
      <div class="number">   TOP FOUR <br> </div>
      <div class="number">   FINALS <br> </div>
      <div class="number">   TITLES <br> </div>
  <br>
  </div>
  <div v-bind:key="test.managers" v-for="test in data.managers" class="card">




  <div class="row">
      <div class="id">  {{ test.id}}  <br> </div>
      <div class="name">   {{ test.manager}} <br> </div>
      <div class="box">   {{ test.team_name}} <br> </div>
      <div class="bignumber">   {{ test.year_joined}} <br> </div>
      <div class="status">   {{ test.status}} <br> </div>
      <div class="bignumber">   {{ test.total_pts}} <br> </div>
      <div class="number">   {{ test.total_w}} <br> </div>
      <div class="number">   {{ test.total_l}} <br> </div>
      <div class="number">   {{ test.games_played}} <br> </div>
      <div class="number">   {{ test.playoffs}} <br> </div>
      <div class="number">   {{ test.topfour}} <br> </div>
      <div class="number">   {{ test.finals}} <br> </div>
      <div class="number">   {{ test.titles}} <br> </div>
  <br>
  </div>
  </div>
  </div>
</template>


<script>
/* eslint-disable */
export default {
  name: "Table",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      fetch("https://bsfbbasketball.herokuapp.com/")
        .then(res => res.json())
        .then(data => {
          this.data = data;
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Nanum+Gothic:700');

#Wrapper {
  background-color:#f7f8f3;
  color: #222;
  margin: 1rem;
    width: 100vw;
    font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Fira Sans', sans-serif;

}


.row {
  display: flex;
  justify-content: flex-start;
  width: 100vw;
    padding: 2px;
}

.box {
    padding: 2px;
  max-width: 150px;
  min-width: 150px;
  text-align: left;
}
.status {
    padding: 2px;
  max-width: 60px;
  min-width: 60px;
  text-align: left;
}
.id {
  padding: 2px;
  max-width: 30px;
  min-width: 30px;
    text-align: left;
    font-family: 'Fira Sans', sans-serif;
}
.number {
    padding: 2px;
  max-width: 20px;
  min-width: 20px;
    text-align: left;
        font-family: 'Fira Sans', sans-serif;
}
.bignumber {
    padding: 2px;
    max-width: 50px;
  min-width: 50px;
    text-align: left;
        font-family: 'Fira Sans', sans-serif;
}
.name {
    padding: 2px;
    max-width: 64px;
  min-width: 64px;
    text-align: left;
}
</style>
