<template>
    <div class="topnav">
        <div class="contain top">
            <div class="leftlogo"></div>
            <div class="centercontent">
                <div><router-link to="/">首页</router-link> </div>
                <div><router-link to="/graduationindex/graduation">毕业、就业</router-link> </div>
                <div><router-link to="/organization">社团、学生会</router-link> </div>
                <div><router-link to="/exp">经验分享</router-link> </div>
                <div><router-link to="/personage">个人主页</router-link></div>
            </div>
            <div class="rightlogin">
                <div :class="type ? 'login' : 'loginout'"><router-link to="/login">登录/注册</router-link></div>
                <div :class="type ? 'loginout' : 'login'" @click="loginout">退出登录</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            type: 1
        }
    },
    mounted() {
        console.log('cookie', document.cookie)
        if (document.cookie == ''||document.cookie == 'gxp') {
            this.type = 1
            console.log('type', this.type)
        } else {
            this.type = 0
            console.log('type', this.type)
        }
    },
    methods: {
        loginout() {
            document.cookie = 'gxp'
            console.log('执行loginout cookie=', document.cookie)
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.contain {
    width: 1200px;
    margin: 0 auto;
    color: #fff;
}

div>a {
    color: #fff;
}

.topnav {
    height: 50px;
    background-color: rgba(19, 19, 19, .8);

    .top {
        >div {
            float: left;
            height: 50px;
            line-height: 50px;
        }

        .leftlogo {
            width: 50px;
            background-image: url(../../public/favicon.ico);
            background-size: contain;
        }

        .centercontent {
            margin-left: 150px;

            >div {
                float: left;
                height: 50px;
                line-height: 50px;
                margin: 0 20px;
            }

            >div:hover {
                cursor: pointer;
            }

            >div:hover>a {
                color: rgba(186, 141, 232, 0.8);
            }


        }

        .rightlogin {
            float: right;
            margin-right: 20px;

            >div:hover {
                cursor: pointer;
            }

            >div:hover>a {
                color: rgba(186, 141, 232, 0.8);
            }
        }
    }


}

.login {}

.loginout {
    display: none;
}
</style>