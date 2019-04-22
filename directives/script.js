const vm = new Vue({
  el: '#app',
  data: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus qui officia, doloremque ipsa repudiandae soluta nostrum nobis beatae laboriosam.',
    showText: true,
    textClass: 'red',
    link: 'https://danielbonifacio.com.br',
    attr: 'hrefabcd',
    number: "1"
  },
  methods: {
    sayHi() {
      window.alert('hi')
    }
  }
})