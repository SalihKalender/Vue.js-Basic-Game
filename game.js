new Vue({
    el: "#game",
    data: {
        newGame: true,
        yourTotal: 100,
        monsterTotal: 100,
    },
    methods: {
        startNewGame() {
            this.newGame = !this.newGame;
            this.yourTotal = 100;
            this.monsterTotal = 100;
        },
        Attack() {
            let IncyourHealt = Math.ceil(Math.random()*15).toFixed(0)
            let IncmnstrHealt = Math.ceil(Math.random()*15).toFixed(0)
            this.yourTotal = this.yourTotal - IncyourHealt;
            this.monsterTotal = this.monsterTotal - IncmnstrHealt;
            console.log(this.yourTotal);
            console.log(this.monsterTotal);
            if(this.yourTotal==0 && this.monsterTotal==0) {
                this.yourTotal = 1;
                alert("You Won");
                this.newGame = true;
            }
        },
        SpecialAttack() {
            let IncyourHealt = Math.ceil(Math.random()*25).toFixed(0)
            let IncmnstrHealt = Math.ceil(Math.random()*25).toFixed(0)
            this.yourTotal = this.yourTotal - IncyourHealt;
            this.monsterTotal = this.monsterTotal - IncmnstrHealt;
            if(this.yourTotal==0 && this.monsterTotal==0) {
                this.yourTotal = 1;
                this.newGame = true;
                alert("You Won");
            }
            if(this.monsterTotal == 0 && this.yourTotal ==0) {
                this.yourTotal = 1;
                alert("You Won")
            }
            if(this.yourTotal==0 && this.monsterTotal==0) {
                this.yourTotal = 1;
                alert("You Won");
                this.newGame = true;
            }
        },
        Cure: function() {
            let IncyourHealt = Math.ceil(Math.random()*25).toFixed(0)
            let IncmnstrHealt = Math.ceil(Math.random()*25).toFixed(0)
            let addCure = Math.ceil(Math.random() * 20);
            while(addCure < IncyourHealt || addCure == IncyourHealt) {
                addCure = Math.ceil(Math.random() * 20);
            }
            this.yourTotal = this.yourTotal + addCure - IncyourHealt;
        },
        GiveUp: function() {
            this.newGame = true;
            this.yourTotal = 100;
            this.monsterTotal = 100;
            alert("You Lost")
        }
    },
    computed: {
        ChngyourHlt: function() {
            return  {
                width: this.yourTotal * 4 + "px",
                transition: "all 0.3s",               
            }
        },
        ChngMnstrHlt: function() {
            return {
                width: this.monsterTotal * 4 + "px",
                transition: "all 0.3s"
            }
        },
    },
    watch: {
        yourTotal: function(value) {
            console.log("Çalış Ulan")
            if(value <= 0) {
                this.yourTotal=0;      
                alert("You Lose");
                this.newGame = true;
            }
        },
        monsterTotal: function(value) {
            if(value < 0 || value == 0 ) {
                this.monsterTotal = 0;
                this.newGame = true;      
                alert("You Won")
            }
        }
    }
})
