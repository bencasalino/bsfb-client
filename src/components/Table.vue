<template>
<div id="Wrapper">
  <br>
  <div>
    <h6>This table contains all past league history since 2008. Future functionality will include column sorting capabilities. </h6>
  </div>
  <div class="force">
  <div id="another-wrap">
      <div class="row bold">
      <div class="flow th-label small">  ID#  <br> </div>
      <div class="flow th-label hundo"> MANAGER <br> NAME<br> </div>
      <div class="flow th-label big"> TEAM <br> NAME </div>
      <div class="flow th-label mid"> YEAR <br> JOINED <br> </div>
      <div class="flow th-label mid"> CURRENT <br> STATUS <br> </div>
      <div class="flow th-label mid">   TOTAL <br> POINTS <br> </div>
      <div class="flow th-label num">   W's <br> </div>
      <div class="flow th-label num">   L's <br> </div>
      <div class="flow th-label num">   GAMES <br> PLAYED <br> </div>
      <div class="flow th-label num">   TOP <br> 8 <br> </div>
      <div class="flow th-label num">   TOP <br> 4 <br> </div>
      <div class="flow th-label num">   FINALS <br> </div>
      <div class="flow th-label  num">   TITLES <br> </div>
  <br>
  </div>
  <div v-bind:key="single_manager.managers" v-for="single_manager in data.managers">
  <div class="row">
      <div class="flow small">  {{ single_manager.id}}  </div>
      <div class="flow hundo">   {{ single_manager.manager}} </div>
      <div class="flow big">   {{ single_manager.team_name}} <br> </div>
      <div class="flow mid">   {{ single_manager.year_joined}} <br> </div>
      <div class="flow mid">   {{ single_manager.status}} <br> </div>
      <div class="flow mid">   {{ single_manager.total_pts}} <br> </div>
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
      <div class="leg">
    <table class="greyGridTable">
    <tbody>
    <tr>
    <td>2008</td>
    <td> <img class="logo" src="/../../static/team-jon.svg">JON</td>
    </tr>
    <tr>
    <td>2009</td>
    <td> <img class="logo" src="/../../static/team-jon.svg">
    JON</td>
    </tr>
    <tr>
    <td>2010</td>
    <td> <img class="logo" src="/../../static/team-ben.svg">
    BEN</td>
    </tr>
    <tr>
    <td>2011*</td>
    <td> <img class="logo" src="/../../static/team-kristen.svg">
    KRISTEN</td>
    </tr>
    <tr>
    <td>2012*</td>
    <td> <img class="logo" src="/../../static/team-ben.svg">
    BEN</td>
    </tr>
    <tr>
    <td>2013</td>
    <td> <img class="logo" src="/../../static/team-rafa.svg">
    RAFA</td>
    </tr>
    <tr>
    <td>2014</td>
    <td> <img class="logo" src="/../../static/team-jon.svg">
    JON</td>
    </tr>
    <tr>
    <td>2015</td>
    <td> <img class="logo" src="/../../static/team-rafa.svg">
    RAFA</td>
    </tr>
    <tr>
    <td>2016</td>
    <td> <img class="logo" src="/../../static/adam2.svg">
    ADAM</td>
    </tr>
    <tr>
    <td>2017</td>
    <td><img class="logo" src="/../../static/burg5.svg">BURGES</td>
    </tr>
    </tbody>
    </table>
    <br>

  </div>
  <!-- end past champs table and row  -->

  </div>
  <div>
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


#another-wrap {
    background-color:#f7f8f3;
  color: #222;
  margin: .2rem;
  font-size: 11px;
  margin-top:20px;
  margin-left: 20px;
    /* min-width: 100vw; */
    font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Fira Sans', sans-serif;
        text-align: left;
          justify-content: center;
}
#Wrapper {
/* display: flex; */
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
  border-bottom: 2px solid rgb(213, 212, 212);
  /* min-width: 50px;
    max-width: 50px; */
}

.hundo {
    min-width: 80px;
    max-width: 80px;
          font-size: 9px;
}

.mid {
    min-width: 50px;
    max-width: 50px;
          font-size: 10px;
}
.small {
    min-width: 20px;
    max-width: 20px;
}
.big {
    min-width: 90px;
    max-width: 90px;
      font-size: 8px;
}

.num {
    min-width: 30px;
    max-width: 30px;
}
.bold {
  font-weight: 900;
}
.th-label {
      min-height: 20px;
    max-height: 20px;
    font-size: 8px;
    font-weight: 900;
    color: #333;

}

h6 {
padding-left: 20px;
      font-size: .7rem;
      font-family: 'Fira Sans', sans-serif;
      font-weight: 500;
      text-align: left;
      color: white;
      border-bottom: 2px solid white;
}

.force {
  display: flex;
}

/* border overall */
table.greyGridTable {
  border: 2px solid #f7f8f3 !important;
  /* min-width: 200px; */
  text-align: left;
  border-collapse: collapse;
      font-size: .3rem;
      font-family: 'Fira Sans', sans-serif;
      font-weight: 400;
        z-index: 2;
}

table.greyGridTable td, table.greyGridTable th {
  border-bottom: 2px solid rgb(225, 225, 225);
  padding: 2px 3px;
    z-index: 2;
      background: #ec202a;
}
table.greyGridTable tbody td {
  font-size: 11px;
    z-index: 9999;
      background: #EBEBEB;
}
table.greyGridTable td:nth-child(even) {
  /* background: #EBEBEB; */
}
table.greyGridTable thead {
  background: #ec202a;
  border-bottom: 4px solid #0777bc;
    z-index: 9999;
}
table.greyGridTable thead th {
  font-size: 11px;
  font-weight: bold;
  color: #f7f8f3;
  text-align: center;
  border-left: 2px solid #f7f8f3;
    z-index: 9999;
}
table.greyGridTable thead th:first-child {
  border-left: none;
    z-index: 9999;
}


.leg {
  margin-top: 20px;
  margin-left: 10px;
}

.logo {
  max-height: 1.1rem;
  max-width: 1.1rem;
    min-height: 1.1rem;
  min-width: 1.1rem;
}
</style>
