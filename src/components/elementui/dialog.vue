<template>
    <div>
        <el-form :model="form.name" :inline="true">
            <el-form-item label="">
                <el-button type="primary" @click="goback()">返回</el-button>
            </el-form-item>
            <el-form-item label="提示">
                <el-button @click="dialogVisible = true" type="primary">点击打开 Dialog</el-button>
                <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="" @click="dialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
                    </span>
                </el-dialog>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {},
            dialogVisible: false
        }
    },
    methods:{
        handleClose(done){
            this.$confirm('确定关闭？').then(_ => { done(_) }).catch(_ => { done(_)})
        },
        goback(){
            // this.$router.go(-1)
            this.$router.back()
        }
    }
}
</script>

<style>

</style>