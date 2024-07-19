
  new Vue({
    el: "#bulb",

    data(){
      return{
        title: "The light_Bulb",
        signal: false,
      }},

      methods: {
        toggle: function(){
          this.signal = !this.signal;
        }
      }
  })
