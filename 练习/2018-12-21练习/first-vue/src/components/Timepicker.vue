<template>
    <div>
        <div class="Timepicker">
            <div class="btn">
                <span @click="clickHour" :style="{opacity:(!hourOnOFF?'.7':'')}">{{hourVal}}</span>
                <span>:</span>
                <span @click="clickMinute" :style="{opacity:(hourOnOFF?'.7':'')}">{{minuteVal}}</span>     
            </div>
            <div class="list">
                <div class="clockDial" ref="clockDial">
                    <span ref="core"></span>
                    <span ref="pointer"></span>
                    <ul class="item">
                        <li v-for="item in hourList" :key="item" :class="{'zIndex':!hourOnOFF,'active':item == hourVal}"  ref="hour" >{{item}}</li> 
                        <li v-for="item in minuteList" :key="item" :class="{'zIndex':hourOnOFF,'active':item == minuteVal}"  ref="minute" >{{item}}</li>                                
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
                let hour = this.$refs['hour'];
                let minute = this.$refs['minute'];
                let clockDial = this.$refs['clockDial'];
                let core = this.$refs['core'];
                let pointer = this.$refs['pointer'];
                for(let i=0;i<12;i++){
                        hour[i].style.cssText = "transform:rotate("+(i+1)*30+"deg)";
                        minute[i].style.cssText = "transform:rotate("+i*30+"deg)";
                };
                
                //获取角度
                let getAngle = (e) => {
                    let CoreLeft = clockDial.offsetLeft+core.offsetLeft+3;
                    let CoreTop = clockDial.offsetTop+core.offsetTop+3;
                    let x = e.clientX - CoreLeft;
                    let y = e.clientY - CoreTop;
                    let Value = Math.atan2(x,y)/Math.PI*180
                    this.angle = parseInt(-Value + 180)
                    
                }

                let move = (e) => {
                    getAngle(e)
                    pointer.style.cssText = "transform:rotate("+this.newAngle+"deg)";
                }

                clockDial.addEventListener('mousedown',(e) => {
                    getAngle(e)  
                    pointer.style.cssText = "transform:rotate("+this.newAngle+"deg)";                
                    clockDial.addEventListener('mousemove',move)
                    clockDial.addEventListener('mouseup',() => {
                        clockDial.removeEventListener('mousemove',move)
                        setTimeout(()=>{
                            this.hourOnOFF = false
                            if(typeof this.minuteVal === "number"){
                                this.angle = this.minuteVal*6
                            }else{
                                this.angle = 0
                            }
                        },100)
                    })
                    clockDial.addEventListener('mouseleave',() => {
                        clockDial.removeEventListener('mousemove',move)
                    })
                })

            },
            updated() {
                let pointer = this.$refs['pointer'];
                pointer.style.cssText = "transform:rotate("+this.newAngle+"deg)";
            }, data(){
                return{
                    hourOnOFF:true,
                    angle:0,
                    hourVal:"--",
                    minuteVal:"--"
                }
            },
            methods:{
                clickHour(){
                    this.hourOnOFF = true;
                    if(this.hourVal == 12){
                        this.angle = 0
                    }else(
                        this.angle = this.hourVal*30
                    )
                },
                clickMinute(){
                    this.hourOnOFF = false;
                    if(typeof this.minuteVal === "number"){
                        this.angle = this.minuteVal*6
                    }else{
                        this.angle = 0
                    }
                    
                }
            },
            watch:{
                angle(val){
                    if(this.hourOnOFF){
                        this.hourVal = parseInt(val/30)                      
                    }else{
                        this.minuteVal = parseInt(val/6)
                    }
                },
                hourVal(val){
                    if(val == 0){
                        this.hourVal = 12;
                    }
                }
            },
            computed:{
                hourList(){
                    let arr = []
                    for(let i=1;i<13;i++){
                        arr.push(i)
                    }
                    return arr
                },
                minuteList(){
                    let arr = []
                    for(let i=0;i<12;i++){
                        arr.push(i*5)
                    }
                    return arr
                },
                newAngle(){
                    if(this.hourOnOFF){
                        return parseInt(this.angle/30)*30
                    }else{
                        return this.angle
                    }
                }
            }
        
    }
</script>

<style scoped>
    .Timepicker{
            margin: 40px;
            -moz-user-select:none;/*火狐*/
            -webkit-user-select:none;/*webkit浏览器*/
            -ms-user-select:none;/*IE10*/
            -khtml-user-select:none;/*早期浏览器*/
            user-select:none;    
        }
        .Timepicker .btn{
            width: 290px;
            height: 100px;
            background: #1867C0;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .Timepicker .btn>span{
            font-size: 60px;
            margin: 5px;
            align-self: baseline;
        }
        .Timepicker .list{
            width: 288px;
            height: 290px;
            border: 1px solid #ddd;
        }
        .list .clockDial{
            width: 270px;
            height: 270px;
            border-radius: 50%;
            position: relative;
            background: #E0E0E0;
            left: calc(50% - 135px);
            top: calc(50% - 135px);
        }
        .clockDial>span:nth-of-type(1){
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: absolute;
            background: #005CAF;
            top:calc(50% - 4px);
            left: calc(50% - 4px);
        }
        .clockDial>span:nth-of-type(2){
            width:2px;
            height:100px;
            background:#005CAF;
            position:absolute;
            left:calc(50% - 1px);
            bottom: 50%;
            transform-origin:bottom; 
        }
        .clockDial ul{
            margin: 0;
            padding: 0;
            width: inherit;
            height: inherit;
        }
        .clockDial ul li{
            width: 40px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            border-radius: 50%;
            list-style: none;
            position: absolute;
            top:5px;
			left:calc(50% - 20px);
			transform-origin:20px 130px;            
        }
        .Timepicker  .zIndex{
            z-index: -1;
        }
        .active{
            background:#1867C0;
            color: white;
        }
</style>