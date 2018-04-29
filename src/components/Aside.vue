<template>
<div class="aside">
  <div class="splitter">
    <div class="ctas">
<br>
      <!-- <p>
      BSFB about section
    </p> -->
  <!-- CTA -->
  <a>
  <router-link :to="{name: 'Rules'}">
  <button class="btn">
    CONSTITUTION & RULES
  </button>
  </router-link>
  </a>
<br>
  <!-- CTA -->
  <a>
  <router-link :to="{name: 'HOF'}">
  <button class="btn">
    LEAGUE HALL OF FAME
  </button>
  </router-link>
  </a>
<br>
  <!-- CTA -->
  <a href="http://games.espn.com/fba/schedule?leagueId=57357" target="_blank">
  <button class="btn">
    SEASON SCHEDULE
  </button>
  </a>
<br>
  <!-- CTA -->
  <a href="http://games.espn.com/fba/tools/finalstandings?leagueId=57357" target="_blank">
  <button class="btn">
    FINAL STANDINGS
  </button>
  </a>
<br>
  <!-- CTA -->
  <a>
  <router-link :to="{name: 'Table'}">
  <button class="btn">
    LEAGUE HISTORY
  </button>
  </router-link>
  </a>
<br>
    </div>
  <div class="table-wrap">
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
  </div>
  <!-- end past champs table and row  -->

<div class="splitter">
<br>
<!-- <h3>ALL TIME WINS</h3> -->
<div class="table-wrap">
<table class="greyGridTable">
<thead>
<tr>
<th>RANK</th>
<th>WINS</th>
<th>TEAM</th>
</tr>
</thead>
<tbody>
<tr>
<td class="rank">1</td>
<td class="rank">106</td>
<td class="mid"><img class="logo" src="/../../static/team-jon.svg">JON</td>
</tr>
<tr>
<td class="rank">2</td>
<td class="rank">104</td>
<td><img class="logo" src="/../../static/team-ben.svg">BEN</td>
</tr>
<tr>
<td class="rank">3</td>
<td class="rank">89</td>
<td><img class="logo" src="/../../static/team-rafa.svg">RAFA</td>
</tr>
<tr>
<td class="rank">4</td>
<td class="rank">54</td>
<td><img class="logo" src="/../../static/team-thunder.svg">ZETTLE</td>
</tr>
<tr>
<td class="rank">5</td>
<td class="rank">36</td>
<td><img class="logo" src="/../../static/adam2.svg">ADAM</td>
</tr>
<tr>
<td class="rank">6</td>
<td class="rank">32</td>
<td><img class="logo" src="/../../static/team-new.svg">CRAIG</td>
</tr>
<tr>
<td class="rank">7</td>
<td class="rank">30</td>
<td><img class="logo" src="/../../static/burg5.svg">BURGES</td>
</tr>
<tr>
<td class="rank">8</td>
<td class="rank">30</td>
<td><img class="logo" src="/../../static/team-flame.svg">CARLO</td>
</tr>
<tr>
<td class="rank">9</td>
<td class="rank">25</td>
<td><img class="logo" src="/../../static/team-king.svg">LAMAR</td>
</tr>
<tr>
<td class="rank">10</td>
<td class="rank">24</td>
<td class="rank"><img class="logo" src="/../../static/team-burger.svg">YACINE</td>
</tr>
</tbody>
</table>
</div>
<br>
<!-- <h3>ALL TIME PTS</h3> -->
<div class="table-wrap">
<table class="greyGridTable">
<thead>
<tr>
<th>RANK</th>
<th>POINTS</th>
<th>TEAM</th>
</tr>
</thead>
<tbody>
<tr>
<td class="rank">1</td>
<td class="rank">191,975</td>
<td class="mid"><img class="logo" src="/../../static/team-jon.svg">JON</td>
</tr>
<tr>
<td class="rank">2</td>
<td class="rank">186,737</td>
<td><img class="logo" src="/../../static/team-ben.svg">BEN</td>
</tr>
<tr>
<td class="rank">3</td>
<td class="rank">174,681</td>
<td><img class="logo" src="/../../static/team-rafa.svg">RAFA</td>
</tr>
<tr>
<td class="rank">4</td>
<td class="rank">111,468</td>
<td><img class="logo" src="/../../static/adam2.svg">ADAM</td>
</tr>
<tr>
<td class="rank">5</td>
<td class="rank">101,460</td>
<td><img class="logo" src="/../../static/team-king.svg">LAMAR</td>
</tr>
<tr>
<td class="rank">6</td>
<td class="rank">85,841</td>
<td><img class="logo" src="/../../static/team-chris.svg">CHRIS</td>
</tr>
<tr>
<td class="rank">7</td>
<td class="rank">75,283</td>
<td><img class="logo" src="/../../static/team-new.svg">CRAIG</td>
</tr>
<tr>
<td class="rank">8</td>
<td class="rank">75,736</td>
<td><img class="logo" src="/../../static/team-thunder.svg">ZETTLE</td>
</tr>
<tr>
<td class="rank">9</td>
<td class="rank">71,438</td>
<td><img class="logo" src="/../../static/burg5.svg">BURGES</td>
</tr>
<tr>
<td class="rank">10</td>
<td class="rank">68,502</td>
<td class="rank"><img class="logo" src="/../../static/team-flame.svg">CARLO</td>
</tr>
</tbody>
</table></div>


  </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Aside",
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

.aside {

  padding: 1rem;
  max-width: 300px;
    /* min-width: 300px; */
      max-height: 600px;
    /* min-height: 600px; */
    background: linear-gradient(to bottom, #dadbd6 , #c4c5c0);
 z-index: 2 !important;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.table-wrap {
  /* background: #dadbd6; */
  z-index: 2;
}

.content {
    background: linear-gradient(to right, #ec202a , #da2231);
  /* background-color: #da2231; */
    max-width: 4rem;
      z-index: 9999;

}
.splitter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    z-index: 2;
      /* min-width: 200px; */
}
h2 {
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



.logo {
  max-height: 1.1rem;
  max-width: 1.1rem;
    min-height: 1.1rem;
  min-width: 1.1rem;
}


.btn {
  margin-top:10px;
  font-family: Arial;
  color: #f7f8f3;
  font-size: 11px;
  background: #ec202a;
  padding: 5px 5px 5px 5px;
  text-decoration: none;
      z-index: 9999 !important;
}

</style>