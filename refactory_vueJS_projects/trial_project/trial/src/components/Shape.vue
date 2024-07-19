<template>
    <div>
            <div>Shape:{{name}}</div>
            <div>Area: {{area}}</div>
            <div>Perimeter:{{perimeter}}</div>        
    </div>
</template>

<script>
export default {
    name: 'Shape',
       data(){

    },
      methods:{
        
        
    },
    components:{

    },
    props:{
        name: String,
        area: Number,
        perimeter: Number,
    }

}
</script>