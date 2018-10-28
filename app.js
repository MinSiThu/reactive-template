let Vue = RT({
    app:'body',
    data : {
        name : 'Min',
        address:'mandalay',
        friends:['may','zaw','kyaw'],
        isMale : true,
    },
    computed : {
        info: function(){
            return `${this.name} lives in ${this.address}`;
        },
        lover: function(){
            return `${this.info()} is ${this.isMale?'male':'female'}`
        },
    },
})
Vue.init();