const app = Vue.createApp({
    data(){
        return{
            state:true,
            inputName:'', 
            names:['Kelvin', 'Clinton', 'Carlos', 'Caro'], 
            error:'false name',
            showError: false,
            result: ''
        }
    },
    computed:{
        isReady(){
            return this.names.length >2
        }

    },
    methods:{
        addName(){
            const userName = this.inputName;
            if(this.validate(userName)){
                this.names.push(userName);
                this.inputName = '';
                console.log(this.names)
            }
            else{
                this.showError= true;
                setTimeout(()=>{
                    this.showError=false

                },3000);
            }

            

        },
        validate(value){
            this.error = '';

            if(value===''){
                this.error = 'Please provide a name';
                return false;

            }
            if(this.names.includes(value)){
                this.error = "the name already exists";
                return false;
            }
            return true
        },
        removeName(index){
            this.names.splice(index,1)

        }, 
        getRandomName(){
            return this.names[Math.floor(Math.random() * this.names.length)]

        },
        generateResult(){
            let rand = this.getRandomName();
            setTimeout(()=>{
                this.result = rand;

            },0);
            if(this.result!==''){
                while(rand === this.result){
                    rand = this,this.getRandomName();
                }
            }
        },
        showResult(){
            this.generateResult();
            this.state = false;

        },
        resetApp(){
            this.state = true;
            this.inputName = '',
            this.names = ['Kelvin', 'Clinton', 'Carlos', 'Caro'];
            this.error ='';
            this.showError = false;
            this.result = '';


        },
        getNewResult(){
            this.generateResult();
        }

    }

}).mount('#app');