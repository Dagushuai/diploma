<template>
    <div>
        <!-- 社团集部分 -->
        <div class="box">
            <h3>社团活动</h3>
            <!-- 点击上传按钮 -->
            <!-- <div class="submitimg">上传</div> -->
            <div class="imgbox">{{ active }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { getmsgbyid } from '../utils/02.api';
export default {
    props: ['faselectid'],
    data () {
        return {
            sonselectid:'',
            club:<any>[],
            active:'',
            
        }
    },
    watch: {
      faselectid:function(newid){
        this.sonselectid = newid;
        this.getmsgbyid(this.sonselectid);
      }  
    },
    methods: {
        // 通过父亲传过来的id去显示不同的社团信息
        getmsgbyid(id:any){
            getmsgbyid(id).then(res=>{
                // console.log(res.data);
                this.club = res.data;
                // console.log(this.club);
                this.active = JSON.parse(JSON.stringify(this.club))[0].active;

            }).catch(e=>{
                console.log(e);
            })
        },
       
    }
}
</script>

<style lang="scss" scoped>
.box {
    position: relative;

    .submitimg {
        position: absolute;
        right: 0;
        top: -10px;
        width: 100px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: rgb(199,163,236);

    }

    .imgbox {
        height: 400px;
        background-color: wheat;
    }

}
</style>
