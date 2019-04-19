const data = {
  title: 'Data and Mehtods',
  person: {
    name: 'Daniel Bonifacio',
    age: 20,
  }
}
const vm = new Vue({
  el: '#app',
  data,
  methods: {
    alterTitle() {
      this.title = `Batata: ${this.person.name}`
    },
    ageSentence(age) {
      return `${age} years`
    }
  }
})

console.log(vm)
