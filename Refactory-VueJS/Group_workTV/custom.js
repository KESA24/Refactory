
new Vue({
  //Element selector - the id from the HTML
  el: '#monitor',

  //Data property 
  data() {
    return {
      signal:false,
      image: "/images/vue logo.jpeg"
    }
    
  },

//the method property
  methods: {
    toggle: function(){
      this.signal = !this.signal;
    }
  }

});
