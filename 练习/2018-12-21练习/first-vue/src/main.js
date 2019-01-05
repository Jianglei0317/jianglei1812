import Vue from 'vue'
import DatePicker from './app'
import test from './components/test.vue'
import TimePicker from './components/Timepicker'



Vue.mixin({
    data(){
        return{
            user:'混入变量'
        }
    }
})

Vue.directive('focus',{
    bind(el,binding,vnode,oldVnode){
        // console.log(el)
        el.value = binding.value
    },
    inserted(el,binding,vnode,oldVnode){

    },
    update(el,binding,vnode,oldVnode){

    },
    componentUpdated(el,binding,vnode,oldVnode){

    },
    unbind(el,binding,vnode,oldVnode){

    }

})
Vue.directive('sync',{
    bind(el,binding,vnode,oldVnode){
        console.log(binding)
        el.value = binding.value
    },
    inserted(el,binding,vnode,oldVnode){
        el.addEventListener("input",() => {
            console.log(el.value)
            // binding.value = el.value
            vnode.context[binding.expression] = el.value
        })
    },
    update(el,binding,vnode,oldVnode){
        el.value = binding.value
    },

})

new Vue({
    el:'#app',
    components:{
        DatePicker,
        test,
        TimePicker
    },
    template:`
        <TimePicker></TimePicker>
        
    `,

})
