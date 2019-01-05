<template>
    <div>
        <div class="DatePicker">
            <input type="text" v-model="text" @click="onOFF = !onOFF" style="width:200px"/>
            <div v-if="onOFF">
                <div class="btn">
                    <div>
                        <span style="font-size: 18px" @click="CurrentYear--">«</span>
                        <span @click="CurrentMonth--" style="font-size: 14px">&lt;</span>
                    </div>
                    <div>
                        <span @click="clickYear">{{CurrentYear}}年</span>
                        <span @click="clickMonth">{{CurrentMonth+1}}月</span>
                    </div>
                    <div>
                        <span @click="CurrentMonth++" style="font-size: 14px">&gt;</span>
                        <span style="font-size: 18px" @click="CurrentYear++">»</span> 
                    </div>                   
                </div>
                <div class="list" v-if="listOnOFF">
                    <span v-for="item1 in weekList" class="disabledColor" :key="item1">{{item1}}</span>
                    
                    <span v-for="item2 in prevMonthList" class="disabledColor cursor"
                    @click="prev(item2)" :key="item2">{{item2}}</span>
                    
                    <span v-for="(item3,index) in currentMonthList" class="cursor bgColor"
                    :class="{now:toDay==item3,active:indexNum==index}"
                    @click="indexNum = index" :key="item3+'item3'">{{item3}}</span>
                
                    <span v-for="item4 in nextMonthList" class="disabledColor cursor"
                    @click="next(item4)" :key="item4+'item4'">{{item4}}</span>
                </div>
                <div class="selectTime" v-if="!listOnOFF" @click="listOnOFF=true">
                    <span v-for="item in yearList" @click="CurrentYear=item" v-show="yearOnOFF" :key="item">{{item}}</span>
                    <span v-for="(item,index) in monthList" @click="CurrentMonth=index" v-show="monthOnOFF" 
                    :key="item" style="font-size:14px">{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            mounted(){
                let date = new Date();
                this.CurrentDay = date;
                this.CurrentMonth = date.getMonth();
                this.CurrentYear =date.getFullYear();
                
            },
            beforeUpdate() {
                /**
                 * 获取月的第一天
                 */
                 function getFirstDay(month,year){
                    let date=new Date();
                    date.setFullYear(year,month,1)
                    return date.getDay();
                }
                /**
                 * 获取月的最后一天
                 */
                function getLastDay(month,year){
                let MonthFirstDay = new Date(year,month+1,1);
                let oneDay = 1000*60*60*24;
                let lastday = new Date(MonthFirstDay-oneDay).getDate()
                return lastday;
                }

                let firstday = getFirstDay(this.CurrentMonth,this.CurrentYear);                
                
                //将天数转成数组
                function getDayToList(lastday){ 
                    let arr = [];
                    for(var i=0;i<lastday;i++){
                        arr.push(i+1)
                    }
                    return arr
                }  
                let arr = getDayToList(getLastDay(this.CurrentMonth-1,this.CurrentYear))
                let arr1 = arr.slice(arr.length-firstday)
                let arr2 = getDayToList(getLastDay(this.CurrentMonth,this.CurrentYear))

                let arr3 = [...arr1,...arr2]
                let arr4 = []
                for(let i=1;arr3.length<42;i++){
                    arr3.push(i) 
                    if(arr3.length == 42){
                        arr4 = arr3.slice(arr3.length - i)
                    }
                }
                this.prevMonthList = arr1;
                this.currentMonthList = arr2;
                this.nextMonthList = arr4;
            },
            data(){
                return{ 
                    onOFF:false,                  
                    indexNum:null,
                    prevMonthList:null,
                    currentMonthList:null,
                    nextMonthList:null,
                    CurrentYear:null,
                    CurrentMonth:null,
                    CurrentDay:null,
                    weekList:["日","一","二","三","四","五","六"],
                    listOnOFF:true,
                    yearOnOFF:false,
                    monthOnOFF:false
                }
            },
            watch: {
                CurrentMonth(val){
                    if(val > 11){
                        this.CurrentYear++
                        this.CurrentMonth = 0;
                    }else if(val < 0){
                        this.CurrentYear--
                        this.CurrentMonth = 11;
                    }                  
                }
            },
            methods:{
                prev(item){
                    this.indexNum = item-1;
                    this.CurrentMonth--
                    
                },
                next(item){
                    this.indexNum = item-1;
                    this.CurrentMonth++
                },
                 clickYear(){
                    this.listOnOFF = false;
                    this.yearOnOFF = true;
                    this.monthOnOFF = false;
                },
                clickMonth(){
                    this.listOnOFF = false;
                    this.monthOnOFF = true;
                    this.yearOnOFF = false;
                }
            },
            computed:{
                toDay(){
                    if(this.CurrentDay){
                        if(this.CurrentMonth == this.CurrentDay.getMonth() 
                        && this.CurrentYear == this.CurrentDay.getFullYear()){
                            return this.CurrentDay.getDate()
                        }
                    }                  
                },
                text(){
                    if(this.indexNum!=null){
                       return  this.CurrentYear + " - " + (this.CurrentMonth+1) + " - " + (this.indexNum+1)
                    }
                },
                 yearList(){
                    let arr = [this.CurrentYear]
                    for(let i=1;i<5;i++){
                        arr.unshift(this.CurrentYear-i)
                        arr.push(this.CurrentYear+i)
                    }
                    return arr
                },
                monthList(){
                    let arr = []
                    for(let i=1;i<13;i++){
                        arr.push(i+'月')
                    }
                    return arr
                }
            }
    }
</script>

<style scoped>
       .DatePicker .list{
           display: flex;
           width: 210px;
           height: 220px;
           justify-content: space-around;
           align-content: space-around;
           flex-wrap: wrap;
           border:1px solid #e8eaec;
            border-radius: 0 0 8px 8px;
            border-top: none;
       } 
       .DatePicker .list span{
           font-size: 12px;
           text-align: center;
           width: 28px;
           height: 28px; 
           line-height: 28px;
           border-radius: 6px;
       }
       .DatePicker .list .cursor:hover{
            cursor: pointer;
       }
       .disabledColor{
            color: #c5c8ce;  
       }
       .DatePicker .btn{
            margin-top: 5px;
            font-size: 12px;
            height: 30px;
            width: 210px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border:1px solid #e8eaec;
            border-radius: 8px 8px 0 0;
            -moz-user-select:none;/*火狐*/
            -webkit-user-select:none;/*webkit浏览器*/
            -ms-user-select:none;/*IE10*/
            -khtml-user-select:none;/*早期浏览器*/
            user-select:none;
       }
       .DatePicker .btn span{
           margin: 2px;
       }
       .DatePicker .btn span:hover{
           cursor: pointer;
           color:#2d8cf0;          
       }
       .now{
           position: relative;
       }
       .now::after{
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-top-color: #2d8cf0;
            left: calc(50% - 2px);
       }
        .active{
           background: #2d8cf0;
           color: white;
       }
       .list .active:hover{
            background: #2d8cf0;
       }
       .bgColor:hover{
           background: #e5f4fb;
       }

       .DatePicker .selectTime{
            display: flex;
            width: 210px;
            height: 220px;
            justify-content: space-around;
            align-content: space-around;
            flex-wrap: wrap;
            border:1px solid #e8eaec;
            border-radius: 0 0 8px 8px;
            border-top: none;
       }
       .selectTime>span{
            width: 60px;
            height: 45px;
            line-height: 45px;
            border-radius: 8px;
            text-align: center;
       }
       .selectTime>span:hover{
            background: #e5f4fb;
            cursor: pointer;
       }
</style>