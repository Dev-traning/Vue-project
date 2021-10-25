<template>
   <div>
      
      <div >


 
          <select    v-model="country_id" @change="getState()">
               <option value="" disabled selected>Country</option>
              <option v-for="country in list" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
          </select>

<br/>
              <select   v-model="state_id" @change="getCity()"  >
               <option value="" disabled selected>state </option>
              <option v-for="item in state" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
            </select>
<br/>

              <select    >
               <option value="" disabled selected>city</option>
              <option  v-for="item in city" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
          </select>


 
           </div>
   </div>
</template>
<script>
   import axios from "axios";
 
     
   export default {
       name: 'PostsShow',
   
           data() {
           return { 
               country_id: "101",
               state_id:'',
                   list:[],
                   selected: '',
                   state:[],
                   city:[]
                 
             };
                 },
                methods:{
                      getData()
                  {
                     axios.get('countries?is_light=true')
                     .then((result)=>{
                        this.list=result.data.data;
                        console.warn(result)
                        this.getState()
                         console.warn("sonu result get country")
                       })
                  },
                  getState()
                    {
                     axios.get('states_of_country?is_light=1' +this.country_id, {
                    params: {  country_id: this.country_id  }  })
                     .then((result)=>{
                        this.state=result.data.data;
                        console.warn(result)
                           this.getCity()
                         console.warn("sonu result get state")
                       })
                  },

                   getCity()
                    {
                     axios.get('cities_of_state?is_light=1'+this.state_id, {
                    params: {  state_id: this.state_id  }  })
                     .then((result)=>{
                        this.city=result.data.data;
                        console.warn(result)
                         console.warn("sonu result get city")
                       })
                  }, },
               mounted()
               {   this.getData()
                  }
            }
</script>
 