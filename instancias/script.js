const vm = new Vue({
  el: '#app',
  data: {
    title: 'Instância 1',
    text: 'Texto da primeira instância'
  }
})

const helloWorldComponent = {
  template: `
    <div class="component">
      Hello, World!
    </div>
  `
}

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'Instância 2',
    text: 'Texto da segunda instância'
  },
  components: {
    'hello-world': helloWorldComponent,
  },
})