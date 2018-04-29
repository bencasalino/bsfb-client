<template>
  <div id="footer">
    <p> | &copy; Copyright 2018 |
<a href="https://vuejs.org/">Made with Vuejs </a>
       |

      <a href="https://bencasalino.com/">Contact Me</a> |

      <a href="https://github.com/bencasalino/bsfb-client">Github</a>|
        <a href="https://bsfbbasketball.herokuapp.com/">JSON API |</a>
    </p>
    <br>
    <p class="dontsueme">  ~ Not affiliated with the NBA in anyway. ~ </p>
    <br>
              <img class="footer-logo" src="/../../static/gray222.svg">
  </div>
</template>

<script>

/* eslint-disable */
export default {
  name: "Footer",
    data() {
    return {};
  }
};
</script>


<style scoped>
#footer {
  font-size: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
color: #aaa;
height: 20vh;
background-color: #222;
}

.dontsueme {
  font-style: initial;
  font-size: 8px;
}
.footer-logo{
  max-height: 2rem;
  max-width:2rem;
}
</style>