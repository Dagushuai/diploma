<template>
    <div>
        <!-- 上面部分 -->
        <div class="topbox contain">
            <div class="content">
                <!-- 头像部分 -->
                <div class="headimg">
                    <el-upload class="avatar-uploader" action="http://127.0.0.1:8000/updateHeadimg" @click="getuser"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar headimg" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </div>
                <div>
                    <p>名字：{{ username }}</p>
                    <p>社团：{{ clubname }}</p>
                </div>
            </div>
        </div>
        <!-- 下面部分 -->
        <div class="bottombox contain">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="我的作品" name="first">
                    我的作品
                    <div v-for="(item, index) in works" :key="index">
                        <div class="img"><img :src="item.url" alt=""></div>
                        <div class="content">{{ item.content }}</div>
                        <div class="good">
                            <div>时间：{{ item.time }}</div>
                            <div>点赞数:{{ item.goodnum }}</div>
                            <div>收藏数：{{ item.collectionnum }}</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="我的点赞" name="second">
                    <span>点赞</span>
                    <div v-for="(item, index) in workstwo" :key="index">
                        <div class="img"><img :src="item.url" alt=""></div>
                        <div class="content">{{ item.content }}</div>
                        <div class="good">
                            <div>时间：{{ item.time }}</div>
                            <div>点赞数:{{ item.goodnum }}</div>
                            <div>收藏数：{{ item.collectionnum }}</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="收藏" name="third">
                    收藏
                    <div v-for="(item, index) in worksthree" :key="index">
                        <div class="img"><img :src="item.url" alt=""></div>
                        <div class="content">{{ item.content }}</div>
                        <div class="good">
                            <div>时间：{{ item.time }}</div>
                            <div>点赞数:{{ item.goodnum }}</div>
                            <div>收藏数：{{ item.collectionnum }}</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="社团" name="fourth">
                    社团
                    <div class="main" v-for="(item, index) in worksfour" :key="index">
                        <div class="left">
                            <img :src="item.imgsrc" alt="">
                        </div>
                        <div class="right">
                            <h3 class="title">{{ item.name }}</h3>
                            <div class="heart"></div>
                            <div class="conduction">{{ item.introduction }}</div>
                            <div class="knowmore">退出社团</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="消息" name="fifth">
                    发送的消息
                    <div v-for="(item , index) in message" :key="index">
                        <p>你已经向{{ item.club }}社团发起请求 </p>
                    </div>
                    收到的消息
                    <div v-for="(item, index) in remessage" :key="index">
                        收到{{ item.name }}向我们社团发出的入团请求
                        <div @click="answermsg0(item.clubtype, item.userid1, item.id)">同意</div>
                        <div @click="answermsg1(item.id)">拒绝</div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, onUpdated } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
import {
    getidbycookie, getmsgbyclubtype, getmsgbyuserid, getworkmsgbyuserid, getworksbyuserid, getcollecttionworksbyuserid,
    getclubmsgbyuserid, getuserid, requestmsg, getmsgtome, answermsg, updateagreetype
} from '../utils/02.api'
// 头像部分
const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    console.log(imageUrl.value);
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}

onUpdated(() => {

    getmsgbyuserid(userid.value).then(res => {
        // console.log('userid',userid.value)
        imageUrl.value = res.data[0].imageurl;
        console.log(imageUrl.value);

    })
    //消息部分
    requestmsg(userid.value).then(res => {
        console.log('userid', userid.value);
        message.value = res.data;
        console.log('发出去message', message.value);
    }).catch(e => {
        console.log(e)
    })

    getmsgtome(userid.value).then(res => {

        remessage.value = res.data;
        console.log('收到的消息', remessage.value);
    }).catch(e => {
        console.log(e)
    })


})
// 标签部分
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
// 社团名字
let username = ref('')
let clubname = ref('')
let userid = ref('')
let works = ref([])
let workstwo = ref([])
let worksthree = ref([])
let worksfour = ref([])
const msg = (() => {


    getidbycookie(document.cookie).then(res => {
        userid.value = res.data[0].id;
        getworkmsgbyuserid(userid.value).then(res => {
            works = res.data;
            console.log(works)
        }).catch(e => {
            console.log(e)
        })
        getmsgbyuserid(userid.value).then(res => {
            username.value = res.data[0].name
            let clubtype = res.data[0].clubtype;
            getmsgbyclubtype(clubtype).then(res => {
                clubname.value = res.data[0].name
            }).catch(e => {
                console.log(e)
            })
        }).catch(e => {
            console.log(e);
        })
        getworksbyuserid(userid.value).then(res => {
            workstwo.value = res.data;
        }).catch(e => {
            console.log(e)
        })
        getcollecttionworksbyuserid(userid.value).then(res => {
            worksthree.value = res.data
        }).catch(e => {
            console.log(e)
        })
        getclubmsgbyuserid(userid.value).then(res => {
            worksfour.value = res.data;
        }).catch(e => {
            console.log(e)
        })
    }).catch(e => {
        console.log(e);
    })

})()
let getuser = function () {
    console.log(userid.value)
    getuserid(userid.value).then(res => {
        console.log(res.data);
    }).catch(e => {
        console.log(e)
    })
}

// 消息部分
let message = ref([]);
let remessage = ref([]);
// 同意加入
let answermsg0 = function (clubtype: any, userid: any, itemid: any) {
    answermsg(clubtype, userid).then(res => {
        console.log('=====', clubtype, userid)
        // console.log('mes',res.data)
    }).catch(e => {
        console.log(e)
    })
    updateagreetype(itemid).then(res => {
        console.log(res.data);
        console.log('userid', userid.value);
    }).catch(e => {
        console.log(e)
    })
    // getmsgtome().then(res => {

    //     remessage.value = res.data;
    //     console.log('收到的消息', remessage.value);
    // }).catch(e => {
    //     console.log(e)
    // })
    // this.$nextTick(() => { })



}
// 拒绝加入
let answermsg1 = function (itemid: any) {
    updateagreetype(itemid).then(res => {
        console.log(res.data);
        console.log('userid', userid.value);
    }).catch(e => {
        console.log(e)
    })
    // getmsgtome().then(res => {

    //     remessage.value = res.data;
    //     console.log('收到的消息', remessage.value);
    // }).catch(e => {
    //     console.log(e)
    // })
    // this.$nextTick(() => { })



}
</script>

<style lang="scss" scoped>
.headimg {
    width: 150px;
    height: 150px;
}

.contain {
    width: 1200px;
    margin: 0 auto;
}

.topbox {
    position: relative;
    height: 500px;
    background-color: rgb(236,230,243);

    .content {
        position: absolute;
        bottom: 30px;
        

        >div {
            float: left;
            margin-left: 20px;
        }

        .headimg {
            .avatar-uploader .el-upload {
                border: 1px dashed var(--el-border-color);
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                transition: var(--el-transition-duration-fast);
            }

            .avatar-uploader .el-upload:hover {
                border-color: var(--el-color-primary);
            }

            .el-icon.avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                text-align: center;
            }

        }
    }
}

.bottombox {
    .content{
        background-color: rgb(218,245,253);
    }
    .demo-tabs>.el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
        
    }
}

.img {
    margin: 25px 0;

    >img {
        width: 200px;
        height: 200px;
    }
}

.good {
    background-color: pink;
    >div {
        float: left;
        margin-right: 20px;
    }
}

.main {
    display: flex;
    width: 800px;
    // height: 350px;
    margin: 20px auto;
    background-color: rgb(223, 211, 237);

    .left {
        width: 500px;
        height: 310px;
        margin: 20px 0;
        // background-color: antiquewhite;

        >img {
            width: 500px;
            height: 310px;

        }
    }

    .right {
        position: relative;
        flex-grow: 1;
        background-color: rgb(223, 211, 237);

        .title {
            position: absolute;
            top: 20px;
            left: 20px;
        }

        // .heart {
        //     position: absolute;
        //     right: 20px;
        //     top: 20px;
        //     width: 25px;
        //     height: 25px;
        //     background-color: aqua;
        // }

        .conduction {
            position: absolute;
            top: 60px;
            left: 20px;
            width: 250px;
            height: 170px;
            // background-color: aquamarine;
            overflow: hidden;
            /* 2.用省略号来代替超出文本 */
            text-overflow: ellipsis;
            /* 3.设置盒子属性为-webkit-box  必须的 */
            display: -webkit-box;
            /* 4.-webkit-line-clamp 设置为2，表示超出2行的部分显示省略号，如果设置为3，那么就是超出3行部分显示省略号 */
            -webkit-line-clamp: 8;
            /* 5.字面意思：单词破坏：破坏英文单词的整体性，在英文单词还没有在一行完全展示时就换行  即一个单词可能会被分成两行展示 */
            word-break: break-all;
            /* 6.盒子实现多行显示的必要条件，文字是垂直展示，即文字是多行展示的情况下使用 */
            -webkit-box-orient: vertical;

        }

        .knowmore {
            position: absolute;
            left: 20px;
            bottom: 20px;
            width: 250px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: rgb(199, 163, 236);

            >a {
                display: block;
                width: 100%;
                height: 100%;
                color: #fff;
            }
        }

        .knowmore:hover {
            background-color: rgb(202, 172, 237);

        }
    }
}
</style>