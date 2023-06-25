<template>
    <div>
        <!-- 简介部分 -->
        <div class="main">
            <h3>简介</h3>
            <div class="title">
                {{  introduction }}
            </div>
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
            introduction:'',
            
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
                this.introduction = JSON.parse(JSON.stringify(this.club))[0].introduction;

            }).catch(e=>{
                console.log(e);
            })
        },
       
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin: 10px 0;

    .title {
        height: 200px;
        background-color: wheat;
    }
}
</style>