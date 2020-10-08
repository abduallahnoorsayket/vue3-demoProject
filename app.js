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

const Demon = {
    data() {
        return {
            show: true
        }
    }
}

Vue.createApp(Demon).mount('#demon')

const DemoCoponent = {
    data() {
        return {
            view: "v-a"
        };
    },
    components: {
        "v-a": {
            template: "<div>Component A</div>"
        },
        "v-b": {
            template: "<div>Component B</div>"
        }
    }
};

Vue.createApp(Demo).mount("#demo");



// const Demo - bounce = {
//     data() {
//         return {
//             show: true
//         }
//     }
// }

// Vue.createApp(Demo - bounce).mount('#demo-bounce')