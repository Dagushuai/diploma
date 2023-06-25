<template>
    <div>
        <Topnav></Topnav>
        <div class="contentbox contain">
            <!-- 介绍部分 -->
            <Otwocdt :faselectid="selectid"></Otwocdt>
            <!-- 中间放相册部分 -->
            <Otwobox :faselectid="selectid"></Otwobox>
            <!-- 成员介绍部分 -->
            <Otwopcdt :faselectid="selectid"></Otwopcdt>


            <!-- 立即报名 -->
            <div class="apply"
                @click="user1request(this.userid1, this.userid2, this.club[0].name, this.user1name, this.selectid)">立即报名
            </div>
            <!-- <el-button text @click="open">Click to open the Message Box</el-button> -->
        </div>
    </div>
</template>

<script>
import Topnav from '../components/Topnav.vue';
import Otwocdt from '../components/Otwocdt.vue';
import Otwobox from '../components/Otwobox.vue';
import Otwopcdt from '../components/Otwopcdt.vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import { getmsgbyid, getpmsgbyclubtype, getidbycookie, user1request, getmsgbyuserid } from '../utils/02.api';
export default {
    data() {
        return {
            clubid: '',
            club: [],
            selectid: '',
            userid1: '',
            userid2: '',
            user1name: ''
        }
    },
    components: {
        Topnav,
        Otwocdt,
        Otwobox,
        Otwopcdt

    },
    mounted() {
        // 接收参数 访问的是哪一社团
        this.clubid = JSON.parse(JSON.stringify(this.$route.query));
        this.selectid = JSON.parse(JSON.stringify(this.clubid)).id;


        // console.log(JSON.parse(JSON.stringify(this.clubid)).id);
        this.getmsgbyid();
        this.getpmsgbyclubtype();
        this.getidbycookie();
    },
    methods: {
        getmsgbyid() {
            getmsgbyid(JSON.parse(JSON.stringify(this.clubid)).id).then(res => {
                // console.log(res.data);
                this.club = res.data;
                console.log('club', this.club);
            }).catch(e => {
                console.log(e);
            })
        },
        // 根据社团得到社长的信息
        getpmsgbyclubtype() {
            // console.log('clubtype=',this.clubid.id)
            getpmsgbyclubtype(this.clubid.id).then(res => {
                // console.log('people',res.data);
                this.userid2 = res.data[0].id;
                console.log('userid2', this.userid2)
            }).catch(e => {
                console.log(e)
            })
        },
        // 得到发起人的信息
        getidbycookie() {
            // console.log('cookie',document.cookie)
            getidbycookie(document.cookie).then(res => {
                console.log('userid1', res.data);
                this.userid1 = res.data[0].id;
                console.log('userid1', this.userid1);


                getmsgbyuserid(this.userid1).then(res => {
                    console.log('usermsg', res.data);
                    this.user1name = res.data[0].name;
                    console.log(' this.user1name', this.user1name)
                })

            }).catch(e => {
                console.log(e);
            })
        },

        user1request(userid1, userid2, club, name, clubtype) {
            ElMessage({
                message: '报名成功！',
                type: 'success',
            })
            console.log('clubtype', clubtype);
            user1request(userid1, userid2, club, name, clubtype).then(res => {
                console.log('返回的信息', res.data);
            }).catch(e => {
                console.log(e)
            })
        }

    }
}
</script>

<style lang="scss" scoped>
.contain {
    width: 1200px;
    margin: 0 auto;
}

.contentbox {
    background-color: rgb(236, 230, 243);






    .apply {
        width: 400px;
        height: 40px;
        margin: 20px auto;
        background-color: antiquewhite;
        text-align: center;
        line-height: 40px;
    }
}
</style>