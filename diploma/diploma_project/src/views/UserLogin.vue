<template>
    <div class="body">
        <div class="login">
            <div>
                <!-- 放图片的 -->
                <div :class='state ? "img0" : "img1"'></div>
                <!-- 表单 -->
                <form>
                    <div>
                        <input type="text" class="no" placeholder="账号" v-model="no">
                    </div>
                    <div>
                        <input @focus="hid" @blur="show" type="password" class="pwd" placeholder="密码" v-model="pwd">
                        <div class="false">{{ falsetext }}</div>
                    </div>
                    <div><button class="userlogin" @click="login">登录</button></div>
                </form>
                <div class="bottom">
                    <div><router-link to="/updatepwd">修改密码</router-link> </div>
                    <div><router-link to="/register"> 去注册</router-link></div>
                </div>
                <p>欢迎使用大学生生活服务指南平台</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { login } from '../utils/02.api';
import { ElMessage, ElMessageBox } from 'element-plus'
import { nextTick } from 'vue';
export default {
    data() {
        return {
            no: '',
            pwd: '',
            falsetext: '',
            state: 1
        }
    },
    methods: {
         hid() {
            this.state = 0;      
            this.$nextTick(() => {})
        },
        show(){
            this.state = 1;      
            this.$nextTick(() => {})
        },
        login(event: any) {
            event.preventDefault();//阻止表单默认提交事件，否则页面会刷新。
            login(this.no, this.pwd).then(res => {
                // console.log(res.data); 
                let data = res.data;
                //登录成功
                if (data.length == 1) {
                    const admin = data[0];
                    // console.log(admin);
                    document.cookie = `${admin.no}`;
                    console.log(document.cookie);
                    // document.cookie = `xiaoming`;
                  
                    ElMessage({
                        message: '登录成功！',
                        type: 'success',
                    })
                    // 回到上一个路由的位置
                    // window.history.back();   
                    this.$router.push('/')
                }
                else {
                    //登录失败
                    // this.falsetext = "账号密码错误";
                    ElMessage.error('账号密码错误！')
                    this.pwd = '';
                }
            })
        }
       
    }
}
</script>

<style lang="scss" scoped>
.body {
    height: 600px;
    background-color: rgb(239, 241, 245, .5);
}

.login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 600px;
    height: 400px;
    text-align: center;

    .false {
        position: absolute;
        left: 40%;
        color: red;
    }

    >div {
        position: relative;
        width: 500px;
        height: 350px;
        background-color: white;
        border-radius: 2%;
        margin-top: 150px;

        .img0 {
            position: absolute;
            top: -100px;
            width: 100px;
            height: 100px;
            background-image: url(../img/002.png);
            background-size: contain;
        }

        .img1 {
            position: absolute;
            z-index: -1;
            top: -50px;
            width: 100px;
            height: 100px;
            background-image: url(../img/002.png);
            background-size: contain;
        }

        .no,
        .pwd,
        .userlogin {
            width: 400px;
            height: 40px;
            margin-top: 30px;
            line-height: 40px;
            font-size: 12px;
            border-radius: 2px;
        }

        .no,
        .pwd {
            box-sizing: border-box;
            border: 1px solid #d4d4d4;
            padding: 0 12px;
            color: #999999;

        }

        .no:hover,
        .pwd:hover {
            border-color: #1890ff;
        }

        .userlogin {
            background-color: rgba(102, 51, 153, .8);
            color: #ffffff;
            margin: 30px auto 20px;
        }

        .bottom {
            display: flex;
            width: 400px;
            margin: 20px auto;
            justify-content: center;
            font-size: 12px;

            >div {
                margin: 0 20px;
            }
        }

        p {
            font-size: 12px;
            color: rgba(153, 153, 153, .5);
        }
    }

}
</style>