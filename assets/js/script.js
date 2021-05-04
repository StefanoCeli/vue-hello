const app = new Vue({

    el: '#app',
    data: {
        messaggio:'Hello Vue!',
        miaClasse: "",
        nuovaClasse: ""
    },
    methods:{
        changeColor(classe){
            this.miaClasse = classe;
        },
        keyUp(){
            this.miaClasse = this.nuovaClasse;
        }
    }

})
