<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>

  <div>
    <b-table striped hover id="client-reports" :items="tableData"></b-table>
  </div>
</template>

<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    BTable
  },
  data() {
    return {
      title: 'Hello, Vue 3 table component',
      message: 'This is a Vue 3 table component',
      tableData: [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
      ],
    };
  },
  compatConfig: { MODE: 3 }
};
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
