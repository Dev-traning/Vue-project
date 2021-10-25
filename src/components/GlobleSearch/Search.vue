<template>
    <div>
       <b-form-input size="sm" class="mr-sm-2 title_message nav-search" v-model="searchQuery" placeholder="Search" autocomplete="off"></b-form-input>
 
 
   <div class="panel panel-default"  v-if="searchQuery">
    
          
        
            <div class="panel-footer " v-if="allusers.length" style="position: absolute;z-index:1000; border:1px solid #ccc; background:#fff; ">
               
              
                    <p v-for="item in resultQuery.slice(0,15)" :key="item.id" style=" margin: -1px 0 0 0;font-size: 14px;color: #333;list-style: none;background-color: #fff; background-clip:padding-box;  border-radius: 0 0 3px 3px; max-height: 350px; overflow-y: auto; box-shadow: 2px 2px 4px rgb(0 0 0 / 8%), inset 0 0 0 0.6px #d2d2d2; padding: 0.75px;">
                         <a class="nav-search fw-500 font-xsss text-grey-500" v-bind:href="'/profile/'+item.id">{{item.full_name}}</a>
                    </p>
              
            </div>
        
   </div>
    

 
    </div>
</template>

<script>
import axios from "axios";
export default {
    Name:'Search',
    data() {
    return {
      firstName:'555',
     
        searchQuery: null,
        allusers:[{}],
    
    };
    
  },

   methods: {
    getData() {
           this.users = JSON.parse(localStorage.getItem("UserDetails"));

            
      axios.get('users?is_light=1')

        .then((result) => {
          this.allusers = result.data.data;
       
        });
    },
  },


   computed: {
    resultQuery(){
 
      if(this.searchQuery){
      return this.allusers.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.full_name.toLowerCase().includes(v))
      })
      }else{
        return this.allusers;
      }  
    }
  },

     mounted() {
    this.getData();
  },
   
}
</script>