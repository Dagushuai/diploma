<template>
    <div>
        <!-- 成员介绍部分 -->
        <div>
            <h3>成员介绍</h3>
            <div class="conduction">
                <div>部长：<span>{{ people}}</span></div>
                <div>副部长：<span>{{ people1 }}</span></div>
                <div>其他成员：<span v-for="(item , index) in people2" :key="index">{{ item.name }} &nbsp </span></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { getpeople } from '../utils/02.api';
export default {
    props: ['faselectid'],
    data () {
        return {
            sonselectid:'',
            people:'',
            people1:'',
            people2:<any>[]
        }
    },
    watch: {
      faselectid:function(newid){
        this.sonselectid = newid;
        this.getpeople();
        this.getpeople1();
        this.getpeople2();
      }  
    },
    methods: {
         // 通过id和bosstype去获得部长信息
         getpeople(){
            getpeople(this.sonselectid,0).then(res=>{
                console.log('res--people',res.data);
                this.people = res.data;
                this.people = JSON.parse(JSON.stringify(this.people))[0].name;
            })
        },
        // 通过id和bosstype去获得副部长信息
        getpeople1(){
            getpeople(this.sonselectid,1).then(res=>{
                console.log(res.data);
                this.people1 = res.data;
                this.people1 = JSON.parse(JSON.stringify(this.people1))[0].name;
            })
        },
        // 通过id和bosstype去获取成员的信息
        getpeople2(){
            getpeople(this.sonselectid,2).then(res=>{
                console.log(res.data);
                this.people2 = res.data;
                this.people2 = JSON.parse(JSON.stringify(this.people2));
            })
        }
    }

}
</script>

<style lang="scss" scoped></style>