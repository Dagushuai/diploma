
<template>
    <el-row class="tac">
        <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>毕业</span>
                    </template>
                    <el-menu-item index="1-1"><router-link to="/graduationindex/graduation">怎么毕业及建议</router-link> </el-menu-item>
                    <el-menu-item index="1-2"><router-link to="/graduationindex/campusadvise">校园学习建议</router-link></el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>就业、考研</span>
                    </template>
                    <el-menu-item index="1-1"><router-link to="/graduationindex/match">专业对口、上岸统计</router-link> </el-menu-item>
                    <el-menu-item index="1-2"><router-link to="/graduationindex/compensation">行业薪资分析</router-link></el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>保研建议</span>
                    </template>
                    <!-- <el-menu-item index="1-1"><router-link to="/graduationindex/ashore">上岸统计</router-link> </el-menu-item> -->
                    <el-menu-item index="1-2"><router-link to="/graduationindex/postgraduate">保研建议</router-link></el-menu-item>
                </el-sub-menu>
                
            </el-menu>
        </el-col>
    </el-row>
</template>

      
          

<script lang="ts">
// import {
//     Document,
//     Menu as IconMenu,
//     Location,
//     Setting,
// } from '@element-plus/icons-vue'
// const handleOpen = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
</script>

<style lang="scss" scoped>
a {
    color: black;
    font-size: 12px;
}
</style>