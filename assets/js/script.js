const app = new Vue({

    el: '#app',
    data: {
        messaggio:'Hello Vue!',
        miaClasse: "",
        nuovaClasse: "",
        urlImg:"https://avatars1.githubusercontent.com/u/6128107?s=400&amp;v=4"
    },
    methods:{
        changeColor(classe){
            this.miaClasse = classe;
        },
        keyUp(){
            this.miaClasse = this.nuovaClasse;
            this.nuovaClasse="";
        }
    }

})
