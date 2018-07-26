 Vue.component('button-counter', {
    props: ['title'],
    data: function () {
      return {
        count: 0
      }
      
    },
    template: '<button v-on:click="count++">'+
                    '{{ count }}'+
                '</button>'
  })


  new Vue({ el: '#components-demo' })

