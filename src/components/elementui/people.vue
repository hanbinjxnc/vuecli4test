<template>
    <div>
        <el-form :model="form.name">
          <el-form-item label="提交">
              <el-button type="primary">按钮</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {}
        }
    }
}
</script>

<style>

</style>