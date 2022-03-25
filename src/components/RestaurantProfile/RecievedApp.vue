<template>
  <div class="franchise border-info-md mt-2 rounded-lg shadow-md">
    <div class="pl-4 border-0 card-body w-100 bg-success d-flex rounded-3">
      <h4 class="mb-0 text-white font-xs fw-600 ms-4">
        Recieved Application for Create Job
      </h4>
    </div>
    <div class="p-1 border-0 card-body p-lg-3 w-100 ">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Job Title</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Email ID</th>

            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(listshow, i) in list" v-bind:key="listshow.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ listshow.title }}</td>
            <td>{{ listshow.manpower.name }}</td>
            <td>api data not showing</td>
            <td>{{ listshow.manpower.email }}</td>

            <td>
              <router-link :to="'/profile/' + listshow.user.id"
                ><i class="p-0 feather-eye font-md p-1"></i
              ></router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <table class="table font-xssss">
  <thead class="border-0 text-dark">
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile No</th>
      <th scope="col">Email ID</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="(listshow,i) in list" v-bind:key="listshow.id">
      <td>{{i+1}}</td>
      
      <td>{{listshow.name}}</td>
      <td>+91 9375563101</td>
      <td>{{listshow.email}}</td>
       <td><b-button type="submit" style="background-color: #004898!important" class="text-white w-80 font-s fw-550 pe-2 lh-20 text-uppercase rounded-3 ls-1 bg-success me-1 ms-auto">View</b-button></td>
    </tr>

 
 
  </tbody>
</table> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  NAme: "RecievedApp",
  data() {
    return {
      list: "",
    };
  },

  mounted() {
    axios.get("restaurants/received-application").then((response) => {
      this.list = response.data.data;
    });
  },
};
</script>
