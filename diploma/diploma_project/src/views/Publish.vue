<template>
    <div class="contain">
        <!-- 图片上传区域 -->
        <div class="uploadimg">
            <el-upload v-model:file-list="fileList" action="http://127.0.0.1:8000/updateFile" list-type="picture-card"
                :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <el-icon>
                    <Plus />
                </el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
        </div>
        <hr>
        <!-- 描述内容部分 -->
        <div class="content">
            <el-input v-model="content" :autosize="{ minRows: 5, maxRows: 10 }" type="textarea"
                placeholder="Please input" />
        </div>
        <hr>
        <!-- 类别选择部分 -->
        <div class="type">
            <el-radio-group v-model="workstype" size="large">
                <el-radio-button label="全部" />
                <el-radio-button label="毕业/就业" />
                <el-radio-button label="社团/学生会" />
                <el-radio-button label="日常生活" />
            </el-radio-group>
        </div>
        <hr>
        <!-- 提交按钮 -->
        <div class="submitbtn" @click="submit">立即上传</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import type { UploadProps, UploadUserFile } from 'element-plus';
import { getidbycookie, publish } from '../utils/02.api';
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '../router';
// 图片上传部分
const fileList = ref<UploadUserFile[]>([

])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!
    dialogVisible.value = true
}

// 输入框部分
let content = ref('')

// 选择类别部分
let workstype = ref('')
let userid = ref('')
let url = ref('');
let time: any = ref('')
// 获取当前的时间
const getNowTime = () => {
    // let dt = new Date()
    // var y = dt.getFullYear()
    // var mt = (dt.getMonth() + 1).toString().padStart(2, '0')
    // var day = dt.getDate().toString().padStart(2, '0')
    // var h = dt.getHours().toString().padStart(2, '0')
    // var m = dt.getMinutes().toString().padStart(2, '0')
    // var s = dt.getSeconds().toString().padStart(2, '0');
    // time = y + "-" + mt + "-" + day + " " + h + ":" + m + ':' + s;

    const yy = new Date().getFullYear()
    const MM = (new Date().getMonth() + 1) < 10 ? '0' + (new
        Date().getMonth() + 1) : (new Date().getMonth() + 1)
    const dd = new Date().getDate() < 10 ? '0' + new Date().getDate() : new
        Date().getDate()
    const HH = new Date().getHours() < 10 ? '0' + new Date().getHours() : new
        Date().getHours()
    const mm = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() :
        new Date().getMinutes()
    const ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() :
        new Date().getSeconds()
    time = yy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss;

    console.log('时间是', time)
}

const submit = (event: any) => {
    // event.preventDefault();//阻止表单默认提交事件，否则页面会刷新。

    // 得到时间
    getNowTime()
    // 得到userid url
    getidbycookie(document.cookie).then(res => {
        // console.log(res.data)
        userid = res.data[0].id;
        console.log('userid是', userid);
        url = JSON.parse(JSON.stringify(fileList.value))[0].response;
        console.log('url是', url);
        console.log('content是', content.value);
        console.log('workstype', workstype.value);

        publish(userid, content.value, url, time, workstype.value).then(res => {
            console.log(res.data);
            if (res.data == 1) {
                ElMessage({
                    message: '上传成功！',
                    type: 'success',
                })
            }
           
           
        }).catch(e => {
            console.log(e);
        })
          
        // router.push('/exp');        
        // location.reload();
    }).catch(e => {
        console.log(e);
    })
 
    // router.push('/exp');    
    window.history.back();   




}
</script>

<style lang="scss" scoped>
.contain {
    width: 1200px;
    margin: 0 auto;
}

.uploadimg {
    margin: 20px 0;
}

.content {
    margin: 30px 0;
}

.type {
    margin: 20px 0;
}

.submitbtn {
    margin: 20px auto;
    width: 500px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: rgb(98, 106, 239);
    font-size: 14px;
    color: #ffffff;
}

.submitbtn:hover {
    background-color: rgb(145, 151, 244);
    cursor: pointer;
}
</style>