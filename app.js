// For Flip images 

const app = Vue.createApp({});


app.component("app-child", {
    template: `<div class="img-contain">
  	<div class="overlay">
    	<p class="overlay-text">I don't like this one</p>
      <button @click="toggleShow">Replace!</button>
  	</div>
    <transition name="flip" mode="out-in">
      <slot v-if="!isShowing"></slot>
      <img v-else src='images/sayket03.jpg' alt=''>
    </transition>
  </div>`,
    data() {
        return {
            isShowing: false
        }
    },
    methods: {
        toggleShow() {
            this.isShowing = !this.isShowing;
        }
    }
});

app.mount("#app");

//  For Toggle Box hello

const Demo = {

    data() {
        return {
            show: false
        }
    },
    methods: {
        beforeEnter(el) {
            gsap.set(el, {
                scaleX: 0.8,
                scaleY: 1.2
            })
        },
        enter(el, done) {
            gsap.to(el, {
                duration: 1,
                scaleX: 1.5,
                scaleY: 0.7,
                opacity: 1,
                x: 150,
                ease: 'elastic.inOut(2.5, 1)',
                onComplete: done
            })
        },
        leave(el, done) {
            gsap.to(el, {
                duration: 0.7,
                scaleX: 1,
                scaleY: 1,
                x: 300,
                ease: 'elastic.inOut(2.5, 1)',
            })
            gsap.to(el, {
                duration: 0.2,
                delay: 0.5,
                opacity: 0,
                onComplete: done
            })
        }
    }
}

Vue.createApp(Demo).mount('#demo')

// For Toggle show message 

const Demon = {
    data() {
        return {
            showMessage: true
        }
    }
}

Vue.createApp(Demon).mount('#demon')


// For toggle componenet

const DemoCoponent = {
    data() {
        return {
            view: "v-a"
        };
    },
    components: {
        "v-a": {
            template: "<div>python is very good Programming Language</div>"
        },
        "v-b": {
            template: "<div>PHP is a googd scripting language</div>"
        }
    }
};

Vue.createApp(DemoCoponent).mount("#demoCompoent");


// transiiton group shufle numbers

const DemoGroup = {
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        }
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length)
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle() {
            this.items = _.shuffle(this.items)
        }
    }
};

Vue.createApp(DemoGroup).mount("#list-complete-demo");

// StagList names
const DemoStagList = {
    data() {
        return {
            query: '',
            list: [
                { msg: 'Bruce Lee' },
                { msg: 'Badal' },
                { msg: 'kamal' },
                { msg: 'Kamrul' },
                { msg: 'Kung Fury' },
                { msg: 'jamal' },
                { msg: 'jumman' },
                { msg: 'joha' }


            ]
        }
    },
    computed: {
        computedList() {
            var vm = this
            return this.list.filter((item) => {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                height: '1.6em',
                delay: el.dataset.index * .15,
                onComplete: done
            })
        },
        leave(el, done) {
            gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index * .15,
                onComplete: done
            })
        }
    }
}

Vue.createApp(DemoStagList).mount('#demofilter')

// for transition summation
const sumapp = Vue.createApp({
    data() {
        return {
            firstNumber: 20,
            secondNumber: 40
        }
    },
    computed: {
        result() {
            return this.firstNumber + this.secondNumber
        }
    }
})

sumapp.component('animated-integer', {
    template: '<span>{{ fullValue }}</span>',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            tweeningValue: 0
        }
    },
    computed: {
        fullValue() {
            return Math.floor(this.tweeningValue)
        }
    },
    methods: {
        tween(newValue, oldValue) {
            gsap.to(this.$data, {
                duration: 0.5,
                tweeningValue: newValue,
                ease: 'sine'
            });
        }
    },
    watch: {
        value(newValue, oldValue) {
            this.tween(newValue, oldValue)
        }
    },
    mounted() {
        this.tween(this.value, 0)
    },
})

sumapp.mount('#sumapp')