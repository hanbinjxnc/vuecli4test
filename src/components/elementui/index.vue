<template>
    <div>
        <el-form :model="form.name" :inline="true">
          <el-form-item label="提示">
              <el-button @click="visible = true" type="primary">显示弹窗</el-button>
              <el-dialog title="Hello world" :visible.sync="visible">
                  <p>Try Element</p>
              </el-dialog>
          </el-form-item>
          <el-form-item label="">
              <el-button type="primary" @click="$router.push('/dialog')">跳转到 Dialog</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {},
            visible: false
        }
    }
}
</script>

<style>

</style>