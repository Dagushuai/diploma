<template>
    <div class="body">
        <div class="register">
            <div :class='state ? "img0" : "img1"'></div>
            <form>
                <div>
                    <input type="text" class="name" placeholder="姓名" v-model="userData.name">
                </div>
                <div>
                    <input type="text" class="no" placeholder="账号（11位以内）" v-model="userData.no" @change="panduanno(userData.no)" ref="no">
                </div>
                <div>
                    <input type="password" class="pwd" placeholder="密码" v-model="userData.pwd" prop="userData.pwd"
                        @focus="hid" @blur="show">
                </div>
                <div>
                    <input type="password" class="pwd" placeholder="确认密码" v-model="userData.pwd2" @focus="hid"
                        prop="userData.pwd2" @blur="show" ref="pwd2" @change="panduan(userData.pwd, userData.pwd2)">
                </div>
                <div>
                    <label for="male"><input type="radio" name="sex" value="male" id="male"
                            v-model="userData.sex"><span>男</span></label>
                    <label for="female"><input type="radio" name="sex" value="female" id="female"
                            v-model="userData.sex"><span>女</span></label>
                </div>
                <div><button class="userregister" @click="register">立即注册</button></div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { register } from '../utils/02.api';
import { ElMessage } from 'element-plus';
export default {


    data() {
        return {
            no: '',
            pwd2: '',
            state: 1,
            userData: {
                name: '',
                no: '',
                pwd: '',
                pwd2: '',
                sex: ''
            },
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

        register(event: any) {
            event.preventDefault();//阻止表单默认提交事件，否则页面会刷新。
            register(this.userData.name, this.userData.no, this.userData.pwd, this.userData.sex).then(res => {
                if (res.data == 1) {
                    // 注册成功
                    ElMessage({
                        message: '注册成功！',
                        type: 'success',
                    })
                    this.$router.push('/login');
                }
                else {
                    //注册失败
                    ElMessage.error('注册失败！账号已经被人使用~')
                    this.userData.name = '';
                    this.userData.no = '';
                    this.userData.pwd = '';
                    this.userData.pwd2 = '';
                    this.userData.sex = '';
                }
            })

        },
        panduan(pwd: any, pwd2: any) {
            if (pwd !== '' && pwd !== pwd2) {
                ElMessage.error('两次密码输入不一致！')
                this.$refs.pwd2.focus();
            } else {

            }
        },
        panduanno(no:any) {
            if (no.length > 11){
                ElMessage.error('账号信息输入过长！')
                this.$refs.no.focus();
            }
        }


    }
}
</script>

<style lang="scss" scoped>
#tip {
    position: absolute;
    top: 20px;
    left: 45%;
    display: none;
}

.body {
    height: 600px;
    background-color: rgb(239, 241, 245, .5);
}

#female {
    margin-left: 10px;
}

span {
    font-size: 14px;
    color: rgb(117, 117, 117);
}

.register {
    position: relative;
    top: 150px;
    width: 500px;
    height: 350px;
    background-color: #ffffff;
    border-radius: 2%;
    margin: 0 auto;

    .img0 {
        position: absolute;
        top: -95px;
        right: 0;
        width: 100px;
        height: 100px;
        background-image: url(../img/003.png);
        background-size: contain;
    }

    .img1 {
        position: absolute;
        z-index: -1;
        top: -45px;
        right: 0;
        width: 100px;
        height: 100px;
        background-image: url(../img/003.png);
        background-size: contain;
    }

    form {
        overflow: hidden;
    }

    form>div {
        width: 400px;
        height: 40px;
        margin-top: 30px;
        line-height: 40px;
        font-size: 12px;

        margin: 15px auto;
    }

    .no,
    .pwd,
    .name {
        width: 400px;
        height: 40px;
        box-sizing: border-box;
        border: 1px solid #d4d4d4;
        padding: 0 12px;
        color: #999999;
        border-radius: 2px;
    }

    .no:hover,
    .pwd:hover,
    .name:hover {
        border-color: #1890ff;
    }

    .userregister {
        width: 400px;
        height: 40px;
        background-color: rgba(102, 51, 153, .8);
        color: #ffffff;
        border-radius: 2px;
        text-align: center;
    }

    .userregister:hover {
        background-color: rgba(102, 51, 153, .9);
    }
}
</style>