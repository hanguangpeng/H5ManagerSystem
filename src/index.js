/**
 * Created by 韩旭森 on 2017/4/27.
 */
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

(function(){

    const routes = [
        {path:'/myPage'}
    ];

    const router = new VueRouter({
        routes
    });

    let vm = new Vue({
        el:"#container",
        data:{

        },
        methods:{
            systemMain:function(){
                alert("系统主页")
            },
            myPage: function () {
                alert("我的主页")
            }
        },
        router
    }).$mount('#container');

})();
