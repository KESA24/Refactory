<template>
    <div>
        <!-- <button class="btn btn-success">Greet</button> -->
    <!-- <h1>Body Tag</h1> -->
        <!-- <Shape name="Triangle" area = 4 perimeter = 8 />
        <br/>
        <Shape name="Circle" area = 5.2  perimeter = 12 />
        <br/>
        <Shape name="Rectangle" area = 15 perimeter = 29 />
        <br/>
        <Shape name="Oval" area = 15 perimeter = 20 /> -->
        <!-- <div>
            <div>Shape: Triangle</div>
            <div>Area: 4sq.cm</div>
            <div>Perimeter: 8cm</div>        
        </div>
        <br/>

         <div>
            <div>Shape:Circle</div>
            <div>Area: 5.2sq.cm</div>
            <div>Perimeter: 12cm</div>        
        </div>
        <br/>

         <div>
            <div>Shape: Rectangle</div>
            <div>Area: 15sq.cm</div>
            <div>Perimeter: 20cm</div>        
        </div>
        <br/>

         <div>
            <div>Shape: Rhombus</div>
            <div>Area: 120 sq.cm</div>
            <div>Perimeter: 180cm</div>        
        </div>
        <br/> -->
        <div class="container">
            <div id="products" class="row">
                <div class="card-deck" >
                    <div class="card">
                        <img src="@/assets/mangoes.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Mangoes</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/jackfruit.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Jackfruit</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/oranges2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Oranges</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                        <div class="card">
                        <img src="@\assets\tomatoes4.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Tomatoes</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    </div>
            </div>
            <div class="col-3-lg"></div>
            <div class="col-3-lg"></div>
            <div class="col-3-lg"></div>
            <div class="col-3-lg"></div>

    <div id="services"  class="row"></div>
    <div id="About Us" class="row"></div>
    <div id="Contacts" class="row"></div>
    </div>

    </div>
</template>

<script>
    // import Shape from './Shape'
export default {
    
    name: "Body",
    data(){
        // Create an Array and loop through it to create shapes
        // Read about vue routes
        // shapes:[
        // {name:'Triangle', area:4, perimeter:8}
        // ]

    },
      methods:{
        
        
    },
    components:{
        // Shape,
    }
}
</script>

<style scoped>
    .container{
        padding-top:25px;
    }
</style>