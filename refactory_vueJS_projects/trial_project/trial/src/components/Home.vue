<template>
    <div id="home-page">
        <!--3. Use the Header/Body Component here-->
        <Header/>
        <Body/>
        <Footer/>

        <!-- <h1>
            Welcome to the Trial Project
        </h1>
        <div class="custom">
            <p>Put something</p>
        </div> -->
    </div>
</template>

<script>
// 1. Import header into home file
import Header from './Header';
import Body from './Body';
import Footer from './Footer'
export default {
    name: "Home",
    data(){
        return{}
    },
    methods:{
        greet: function(){
            alert("Hello catalyst 006!");
        }
    },

// 2.Register all components imported
    components: {
        Header,
        Body,
        Footer,
    }

    
}
</script>  

<style scoped>
    /* .custom{
        width: '100%';
        height: '480px';
        background: #000;
    } */

</style>
