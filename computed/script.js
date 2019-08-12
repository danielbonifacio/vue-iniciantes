const vm = new Vue({
  el: '#app',
  data: {
    question: '',
    answer: 'Eu não posso responder nada se voce nao me perguntar!'
  },

  methods: {
    getAnswer() {
      if (!this.question.includes('?')) {
        this.answer = 'Perguntas geralmente têm uma interrogação. ;-)'
        return
      }

      axios
        .get('https://yesno.wtf/api')
        .then(res => {
          this.answer = res.data.answer
        })
        .catch(err => {
          this.answer = 'Erro ao recuperar informacao da API ' + err
        })
    }
  },

  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },

  watch: {
    question() {
      this.answer = 'Esperando voce terminar de digitar...'
      this.debouncedGetAnswer()
    }
  }
})