//  instance1 = new Vue({
//     el : '#root',
//       data : { title: 'Catalyst Students', student :'Kesa'},

//       methods: {
//         greetKesa: function(){
//           alert('Hi Kesa');
//         }
//       }
//   });
  
//   new Vue({
//     el: "#root",
// // the data property
//     data(){
//       return{
//         signal: false
//       }
//     },
// // the methods property
//     methods:{
//       toggle: function(){
//         this.signal= !this.signal;
//       }
//     }
//   })

//   new Vue({
//     el: "#root",
// // the data property
//     data(){
//       return{
//         signal: false,
//         items:["item1", "item2", "item3", "item4", "item5"],

//         //imagespath
//         imageSource: "../images/images2jpeg"
//       }
//     },
// // the methods property
//     methods:{
//       toggle: function(){
//         this.signal= !this.signal;
//       }
//     }
//   })

  new Vue({
    el: "#root",

    data(){
      return{
        title: "Catalyst 006 students:",
        students:[],
        studentToBeAdded: undefined,
      }},

    methods:{
      addStudent: function(){
        this.students.push(this.studentToBeAdded);
      }
    }
  })
