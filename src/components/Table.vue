<template>
<div id="Wrapper">
      <div class="row bold">
      <div class="flow small">  ID  <br> </div>
      <div class="flow hundo"> MANAGER <br> </div>
      <div class="flow big"> TEAM NAME <br> </div>
      <div class="flow hundo"> JOINED <br> </div>
      <div class="flow hundo"> STATUS <br> </div>
      <div class="flow hundo">   PTS <br> </div>
      <div class="flow num">   W <br> </div>
      <div class="flow num">   L <br> </div>
      <div class="flow num">   GAMES <br> </div>
      <div class="flow num">   TOP 8 <br> </div>
      <div class="flow num">   TOP 4 <br> </div>
      <div class="flow num">   FINALS <br> </div>
      <div class="flow num">   TITLES <br> </div>
  <br>
  </div>
  <div v-bind:key="single_manager.managers" v-for="single_manager in data.managers">
  <div class="row">
      <div class="flow small">  {{ single_manager.id}}  </div>
      <div class="flow hundo">   {{ single_manager.manager}} </div>
      <div class="flow big">   {{ single_manager.team_name}} <br> </div>
      <div class="flow hundo">   {{ single_manager.year_joined}} <br> </div>
      <div class="flow hundo">   {{ single_manager.status}} <br> </div>
      <div class="flow hundo">   {{ single_manager.total_pts}} <br> </div>
      <div class="flow num">   {{ single_manager.total_w}} <br> </div>
      <div class="flow num">   {{ single_manager.total_l}} <br> </div>
      <div class="flow num">   {{ single_manager.games_played}} <br> </div>
      <div class="flow num">   {{ single_manager.playoffs}} <br> </div>
      <div class="flow num">   {{ single_manager.topfour}} <br> </div>
      <div class="flow num">   {{ single_manager.finals}} <br> </div>
      <div class="flow num">   {{ single_manager.titles}} <br> </div>
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
    min-width: 100vw;
    font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Fira Sans', sans-serif;
        text-align: left;
          justify-content: center;

}


.row {
  display: flex;
text-align: left;
  /* justify-content: space-around; */
  /* width: 100vw; */
    padding: 2px;
}
.flow {
  text-align: left;
  display: flex;
  justify-content: flex-start;
  /* min-width: 50px;
    max-width: 50px; */
}

.hundo {
    min-width: 100px;
    max-width: 100px;
}
.small {
    min-width: 30px;
    max-width: 30px;
}
.big {
    min-width: 200px;
    max-width: 200px;
}

.num {
    min-width: 65px;
    max-width: 65px;
}
.bold {
  font-weight: 900;
}

</style>
