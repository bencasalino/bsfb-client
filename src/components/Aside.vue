<template>
  <div class="aside">
    <div class="content">
              <h2>LINKS</h2>
    </div>
      <h3>ALL TIME WINS</h3>
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
<td>1</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>2</td>
<td>104</td>
<td>BEN</td>
</tr>
<tr>
<td>3</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>4</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>5</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>6</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>7</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>8</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>9</td>
<td>106</td>
<td>JON</td>
</tr>
<tr>
<td>10</td>
<td>106</td>
<td>JON</td>
</tr>
</tbody>
</table>
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
  min-width: 20rem;
  /* height: 200px; */
}

.content {
  background-color: red;
    max-width: 4rem;

}
h2 {
}
table.greyGridTable {
  border: 2px solid #FFFFFF;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
table.greyGridTable td, table.greyGridTable th {
  border: 1px solid #FFFFFF;
  padding: 3px 4px;
}
table.greyGridTable tbody td {
  font-size: 13px;
}
table.greyGridTable td:nth-child(even) {
  background: #EBEBEB;
}
table.greyGridTable thead {
  background: #FFFFFF;
  border-bottom: 4px solid #333333;
}
table.greyGridTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  border-left: 2px solid #333333;
}
table.greyGridTable thead th:first-child {
  border-left: none;
}

table.greyGridTable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  border-top: 4px solid #333333;
}
table.greyGridTable tfoot td {
  font-size: 14px;
}


</style>