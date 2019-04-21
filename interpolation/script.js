const vm = new Vue({
  el: '#app',
  data: {
    // text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus adipisci ea illo id magnam, sapiente totam laborum necessitatibus hic!',
    linkTag: `
      <a v-bind:href="link">Daniel Bonifacio's Website</a>
    `
  }
})