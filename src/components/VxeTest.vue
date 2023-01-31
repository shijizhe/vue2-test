<template>
  <div style="width: 1200px;margin: 80px;">
    <vxe-grid
        border
        stripe
        class="my-table"
        :columns="tableColumn"
        :data="tableData"
        :tree-config="treeConfig"
        :row-config="rowConfig"
    >
    </vxe-grid>
  </div>
</template>

<script>
export default {
  name: "VxeTest",
  mounted() {
     let x = "BB_sdsadasd"

  },
  data() {
    return {
      rowConfig: {
        isHover: true,
        isCurrent: true,
      },
      treeConfig: {
        transform: true,
        rowField: 'id',
        parentField: 'parentId',
      },
      tableColumn: [
        {field: 'id', title: "id", visible: false},
        {field: 'code', title: "商品编码", treeNode: true},
        {field: 'name', title: "商品名称"},
        {field: 'totalFp', title: "分配量"},
      ],
      tableData: [
        {id: '1', code: "000001", name: "深圳公司", parentId: null, totalFp: 250},
        {id: '11', code: "9999", name: "中华", parentId: "1", totalFp: 100},
        {id: '12', code: "1111", name: "玉溪", parentId: "1", totalFp: 150},
        {id: '2', code: "000002", name: "福建公司", parentId: null, totalFp: 200},
        {id: '21', code: "2222", name: "宽窄", parentId: "2", totalFp: 200}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
::v-deep .my-table .vxe-body--row.row--hover {
  background-color: #42b983;
  z-index: 959;
}

::v-deep .my-table .vxe-body--row.row--current {
  background-color: fuchsia;
  z-index: 999;
}
</style>
