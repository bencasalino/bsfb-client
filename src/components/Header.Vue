<template>
<div id="Wrapper">


<div id="header">
  <div class="left">
    <img class="bsfb" src="/../../static/gray222.svg">
    <h1>BSFB LEAGUE
      <span class="space">BASKETBALL</span>
</h1>
  </div>
    <div class="right">

  <a href="#">
    <img class="social" src="/../../static/fb3.svg">
  </a>
    <a href="#">
    <img class="social" src="/../../static/sl3.svg">
  </a>

</div>
</div>


      <div class="Wrapper-champs">
        <div class="past-champs">
          <img class="logo" src="/../../static/team-jon.svg">
          <p> 2008-09</p>
        </div>
        <div class="past-champs">
          <img class="logo" src="/../../static/team-jon.svg">
          <p> 2009-10</p>
        </div>
        <div class="past-champs">
          <img class="logo" src="/../../static/team-ben.svg">
          <p> 2010-11</p>
        </div>
        <div class="past-champs">
          <img class="logo" src="/../../static/team-kristen.svg">
          <p> 2011-12*</p>
        </div>        <div class="past-champs">
          <img class="logo" src="/../../static/team-ben.svg">
          <p> 2012-13</p>
        </div>
                <div class="past-champs">
          <img class="logo" src="/../../static/team-rafa.svg">
          <p> 2013-14</p>
        </div>
                <div class="past-champs">
          <img class="logo" src="/../../static/team-jon.svg">
          <p> 2014-15</p>
        </div>
                        <div class="past-champs">
          <img class="logo" src="/../../static/team-rafa.svg">
          <p> 2015-16</p>
        </div>
                        <div class="past-champs">
          <img class="logo" src="/../../static/adam2.svg">
          <p> 2016-17</p>
        </div>
                        <div class="past-champs">
          <img class="logo" src="/../../static/burg5.svg">
          <p> 2017-18</p>
        </div>

</div>
 <div class="past-champs">
<!-- <h1>BSFB BASKETBALL LEAGUE</h1> -->
<img class="league-logo" src="/../../static/league.svg">
</div>
        <div class="champs">
      <!-- <p class="champs">PAST LEAGUE CHAMPIONS</p> -->
      </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Nanum+Gothic:700');



#Wrapper-logo {
        font-family: 'Fira Sans', sans-serif;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
}

#header {
          font-family: 'Fira Sans', sans-serif;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  /* align-content: center; */
height: 10vh;
  background-color: #0777bc;
  /* border-bottom:.4rem solid #222; */
}


.Wrapper-champs {
        font-family: 'Fira Sans', sans-serif;
    padding-top: .5rem;
    display: flex;
  justify-content: space-around;
  background-color: #222;
  border-bottom: solid .3rem #0777bc;
    border-top: solid .3rem #f7f8f3;
      /* outline: .3rem solid #0777bc; */
      -webkit-box-shadow: 0px 7px 21px 0px rgba(34,34,34,.5);
-moz-box-shadow: 0px 7px 21px 0px rgba(34,34,34,.5);
box-shadow: 0px 7px 21px 0px rgba(34,34,34,.5);
}

.past-champs {
      display: flex;
        align-items: center;
  flex-direction: column;
  /* color: #ec202a; */


}

.league-logo {
  max-height: 20rem;
  max-width: 20rem;
}
.logo {
  max-height: 5rem;
  max-width: 5rem;
    min-height: 5rem;
  min-width: 5rem;
}

.bsfb {
  padding-left: .5rem;
    padding-right: .5rem;
  max-height: 4rem;
  max-width: 4rem;
}

p {
  padding-top: .5rem;
    padding-bottom: .5rem;
      color: #f7f8f3;
    font-size: .5rem;
      font-family: 'Fira Sans', sans-serif;
      font-weight: 400;
}

.champs {
    display: flex;
  justify-content: center;
        color: #222;

}
h1 {
  font-size: 1.6rem;
        color: #f7f8f3;
        font-weight: 900;
        letter-spacing: 1px;
}
.space {
  letter-spacing: 2.8px;

}
.right {
  padding-right: 30px;
    display: flex;
    justify-content: space-around;
}
.left {
    display: flex;
    align-items: center;
}
.social {
  /* padding-right:.1rem; */
    max-height: 4rem;
  max-width: 4rem;
    min-height: 4rem;
  min-width:4rem;

}


.social:hover {
cursor: pointer;
}

</style>
