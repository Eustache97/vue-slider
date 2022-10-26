
const { createApp } = Vue
createApp({
    data() {
        return{
            slides: [

                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            itemPosition: 0
        };
        
    },
    methods: {
        
        showNext: function(){
            //se la posizione attuale è minore della lunghezza di slides -1
            if(this.itemPosition < this.slides.length - 1){
                //incremento di posizione
                this.itemPosition++;
            } else{
                //altrimenti porto la posizione sa 0
                this.itemPosition = 0;  
                }
        },
        showPrev: function(){
            //se la posizione attuale è maggiore di 0
            if(this.itemPosition > 0){
                //decremento di posizione
                this.itemPosition--;
            } else{
                //altrimenti porto la posizione alla lunghezza di slides -1
                this.itemPosition = this.slides.length - 1;  
                }
                }
            }
}).mount("#app");