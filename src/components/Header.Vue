<template>
<div id="wrap">
  <div class="header-top">
    <div class="header-left">
          <img class="header-logo" src="/../../static/league.svg">
          <h1>BSFB LEAGUE
          <br>
          <span class="space">BASKETBALL</span>
          </h1>
    </div>
    <div class="header-center">
        <div class="past-champs">
          <img class="logo" src="/../../static/team-jon.svg">
          <p class="year"> 2008</p>
        </div>
        <div class="past-champs">
          <img class="logo" src="/../../static/team-jon.svg">
          <p class="year"> 2009</p>
        </div>
        <div class="past-champs">
          <img class="logo" src="/../../static/team-ben.svg">
          <p class="year"> 2010</p>
        </div>
        <div class="past-champs">
          <img class="logo" src="/../../static/team-kristen.svg">
          <p class="year"> 2011*</p>
        </div>        <div class="past-champs">
          <img class="logo" src="/../../static/team-ben.svg">
          <p class="year"> 2012</p>
        </div>
                <div class="past-champs">
          <img class="logo" src="/../../static/team-rafa.svg">
          <p class="year"> 2013</p>
        </div>
                <div class="past-champs">
          <img class="logo" src="/../../static/team-jon.svg">
          <p class="year"> 2014</p>
        </div>
                        <div class="past-champs">
          <img class="logo" src="/../../static/team-rafa.svg">
          <p class="year"> 2015</p>
        </div>
                        <div class="past-champs">
          <img class="logo" src="/../../static/adam2.svg">
          <p class="year"> 2016</p>
        </div>
                        <div class="past-champs">
          <img class="logo" src="/../../static/burg5.svg">
          <p class="year"> 2017</p>
        </div>
        <br>
</div>
    <div class="header-right">
        <a href="https://www.facebook.com/groups/123422284409807/">
    <img class="bm" src="/../../static/fb3.svg">
  </a>
    <a href="https://bsfb.slack.com/">
    <img class="bm" src="/../../static/sl3.svg">
  </a>
      <a href="http://games.espn.com/fba/leagueoffice?leagueId=57357">
    <img class="bm" src="/../../static/espn3.svg">
  </a>
    </div>
  </div>

    <!-- <img id="triangle" src="/../../static/tri5.svg"> -->
      <!-- <div class="blej"></div> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Header",
  data() {
    return {
    };
  }
};
</script>

<style>
#wrap {
      /* background-color:#f7f8f3; */
      border-bottom: .2rem solid #f7f8f3;
}

.header-top {
  /* background-color:#0777bc; */
  background: linear-gradient(to right, #0777bc , #0e5f92);
  height: 10vh;
    justify-content: space-between;
  display: flex;
}
.header-logo{
  max-height: 5rem;
  max-width:5rem;
}
.bm {
    /* max-width:5rem; */
   height:50px;
}
.header-right {
flex-direction: row;
    justify-content: space-between;
  display: flex;
  width: 150px;
}
.header-left {
flex-direction: row;
    justify-content: space-between;
  display: flex;
  /* width: 150px; */
}
.header-center {
  flex-direction: row;
    justify-content: space-between;
  display: flex;
  margin-top:8px;
  margin-right:3rem;
}
h1 {
  margin-top:7px;
  font-size: 1.6rem;
  color: #f7f8f3;
  font-weight: 900;
  letter-spacing: 1px;
}
.space {
  letter-spacing: 2.8px;
}

.logo {
  max-height: 2rem;
  max-width: 2rem;
    min-height: 2rem;
  min-width: 2rem;
}
.year {
    margin-top:4px;
      color: #f7f8f3;
    font-size: .3rem;
      font-family: 'Fira Sans', sans-serif;
      font-weight: 400;
}


.past-champs {
  margin-right:.2rem;
      display: flex;
        align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 701px) {
  .header-center { display: none; }
  h1 {
    font-size: 20px;
  }   /* hide it elsewhere */
}

</style>