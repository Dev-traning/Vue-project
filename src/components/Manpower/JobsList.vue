<template>
  <div class="rounded-lg shadow-md mt-2">
    <div class="card-body  w-100 bg-success border-0 d-flex rounded-3">
      <h4 class="font-xs text-white fw-600  mb-0 ">Jobs List</h4>
    </div>
    <div class="card-body p-lg-3 p-4 w-100 border-0">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Business Nname</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <!-- <th scope="col">Address</th> -->
            <!-- <th scope="col">Show</th> -->
          </tr>
        </thead>

        <tbody
          v-for="(requirements, key) in joblist"
          v-bind:key="requirements.id"
        >
          <tr>
            <th scope="row">{{ key + 1 }}</th>
            <td>{{ requirements.restaurant.name }}</td>
            <td>{{ requirements.restaurant.business_name }}</td>
            <td>{{ requirements.restaurant.mobile_no }}</td>
            <td>{{ requirements.restaurant.email }}</td>
          </tr>
        </tbody>
      </table>
      <!-- <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JosList",

  data() {
    return {
      joblist: [],
      rest: "",
    };
  },
  methods: {
    getData() {
      axios.get("restaurants/job").then((result) => {
        this.joblist = result.data.data;
        console.warn("inquiry result get", result);
      });
    },

    restaurantsshow(id) {
      axios
        .get("restaurants/restaurants/" + id)

        .then((result) => {
          this.rest = result.data.data;
          console.warn("restaurantsshow APi Call", result);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
