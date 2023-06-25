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
                        <input type="password" class="pwd" placeholder="旧密码" v-model="pwd" @focus="hid" @blur="show">
                    </div>
                    <div>
                        <input type="password" class="pwd" placeholder="新密码" v-model="newpwd" @focus="hid" @blur="show">
                    </div>
                    <div><button class="userlogin" @click="updatepwd">修改密码</button></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { updatepwd } from '../utils/02.api';
import { ElMessage, ElMessageBox } from 'element-plus';
export default {
    data() {
        return {
            no: '',
            pwd: '',
            newpwd: '',
            state: 1
        }
    },
    methods: {
        hid() {
            this.state = 0;
            this.$nextTick(() => { })
        },
        show() {
            this.state = 1;
            this.$nextTick(() => { })
        },
        updatepwd(event:any) {
            event.preventDefault();//阻止表单默认提交事件，否则页面会刷新。
            updatepwd(this.no, this.pwd, this.newpwd).then(res => {
                console.log(res);
                if (res.data.state == 1) {
                    // 修改成功
                    ElMessage({
                        message: '修改密码成功',
                        type: 'success',
                    })
                    // 回到上一个路由的位置 登录
                    this.$router.push('/login');
                } else {
                    // 修改失败
                    ElMessage.error('修改失败，账号密码输入错误！')
                    this.pwd = '';
                }
            }).catch(e => {
                console.log(e);
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
            background-image: url(../img/005.png);
            background-size: cover;
        }

        .img1 {
            position: absolute;
            z-index: -1;
            top: -30px;
            width: 100px;
            height: 100px;
            background-image: url(../img/005.png);
            background-size: cover;
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