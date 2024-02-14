<template>
  <div>
    <div>
      <select v-model="country_id" @change="getState()">
        <option value="" disabled selected>Country</option>
        <option
          v-for="country in list"
          :value="country.id"
          v-bind:key="country.id"
        >
          {{ country.name }}
        </option>
      </select>

      <br />
      <select v-model="state_id" @change="getCity()">
        <option value="" disabled selected>state</option>
        <option v-for="item in state" :value="item.id" v-bind:key="item.id">
          {{ item.name }}
        </option>
      </select>
      <br />

      <select>
        <option value="" disabled selected>city</option>
        <option v-for="item in city" :value="item.id" v-bind:key="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PostsShow",

  data() {
    return {
      country_id: "101",
      state_id: "",
      list: [],
      selected: "",
      state: [],
      city: [],
    };
  },
  methods: {
    getData() {
      axios.get(`countries?is_light=1`).then((result) => {
        this.list = result.data.data;
        // console.log("Countries: ", this.list);
        if (this.country_id) {
          this.getState();
          // console.log("Country Id: ", this.country_id);
        }
      });
      // axios.get('countries?is_light=true')
      // .then((result)=>{
      //    this.list=result.data.data;
      //    console.warn(result)
      //    this.getState()
      //     console.warn("sonu result get country")
      //   })
    },
    async getState() {
      //    axios.get('states_of_country?is_light=1' +this.country_id, {
      //   params: {  country_id: this.country_id  }  })
      //    .then((result)=>{
      //       this.state=result.data.data;
      //       console.warn(result)
      //          this.getCity()
      //        console.warn("sonu result get state")
      //      })
      // console.log("Country Id On Change: ", this.country_id);
      try {
        this.state = [];
        let allStates = [];
        let continueState = true;
        let page = 1;

        while (continueState) {
          const response = await axios.get(
            `rw-states_of_country?page=${page}&is_light=1&per_page=1000`,
            {
              params: {
                country_id: this.country_id,
              },
            }
          );
          // console.log("Response of States: ", response);

          const stateData = response.data && response.data.data;

          if (!stateData || stateData.length === 0) {
            // No more countries to fetch, break the loop
            continueState = false;
          } else {
            allStates = [...allStates, ...stateData];
            page++;
          }
        }

        this.state = allStates;

        // console.log("All States: ", this.state);

        if (this.state_id) {
          // console.log("State Id: ", this.state_id);
          this.getCity();
        }
      } catch (error) {
        console.log("Error in Loading States: ", error);
      }
    },

    async getCity() {
      // axios
      //   .get("cities_of_state?is_light=1" + this.state_id, {
      //     params: { state_id: this.state_id },
      //   })
      //   .then((result) => {
      //     this.city = result.data.data;
      //     console.warn(result);
      //     console.warn("sonu result get city");
      //   });
      // console.log("State Id On Change: ", this.state_id);
      try {
        this.city = [];
        let allCities = [];
        let continueCity = true;
        let page = 1;

        while (continueCity) {
          const response = await axios.get(
            `rw-cities_of_state?is_light=1&page=${page}&per_page=1000`,
            {
              params: {
                state_id: this.state_id,
              },
            }
          );
          // console.log("Response of Cities: ", response);

          const cityData = response.data && response.data.data;

          if (!cityData || cityData.length === 0) {
            // No more countries to fetch, break the loop
            continueCity = false;
          } else {
            allCities = [...allCities, ...cityData];
            page++;
          }
        }

        this.city = allCities;

        // console.log("All Cities: ", this.city);
      } catch (error) {
        console.log("Error in Loading States: ", error);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
 