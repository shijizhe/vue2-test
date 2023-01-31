<template>
  <div>
    <h1>Date Test</h1>
    <Row>
      <DatePicker
          type="date"
          v-model="searchDate"
          @on-change="searchDateChange"
          placeholder="选择查询日期"
          :clearable="false"
      >
      </DatePicker>
      <Input  style="margin-left: 20px;width: 320px" v-model="searchDate"></Input>
      <Button type="primary" @click="doSearch" style="margin-left: 20px">查询</Button>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'MainTest',
  data(){
    return{
      searchDate:'2022-11-01'
    }
  },
  mounted(){

  },
  methods:{
    searchDateChange(value){
      this.searchDate = value
      console.log(this.searchDate)
    },
    doSearch(){
      this.$Message.info(this.searchDate+'');
      console.log(this.searchDate)
    }
  }
}
</script>

<style scoped>
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
