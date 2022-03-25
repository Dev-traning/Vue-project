<template>
  <div class="franchise border-info-md rounded-lg shadow-md mt-2">
    <div class="pl-4 border-0 card-body w-100 bg-success d-flex rounded-3">
      <h4 class="mb-0 text-white font-xs fw-600 ms-4">
        My Jobs
      </h4>
    </div>
    <div class="p-1 border-0 card-body p-lg-3 w-100 ">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Job Title</th>
            <th scope="col">Position</th>
            <th scope="col">Experience</th>
            <th scope="col">Salary</th>

            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(job, i) in jobs" v-bind:key="job.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ job.title }}</td>
            <td>{{ job.position }}</td>
            <td>{{ job.experience }}</td>
            <td>{{ job.salary }}</td>
            <td>
              <button @click="deleteJobs(job.id)" type="button" class="btn">
                <i class="p-0 feather-trash-2 font-md p-1"></i>
              </button>
            </td>
            <!-- <td>
              <router-link :to="'/profile/' + listshow.user.id"
                ><i class="p-0 feather-eye font-md p-1"></i
              ></router-link>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  Name: "MyJobs",
  data() {
    return {
      jobs: [],
      id: "",
    };
  },

  methods: {
    async deleteJobs(id) {
      this.id = id;
      await axios.delete("restaurants/job/" + this.id).then((response) => {
        console.log(response);
        this.$router.go();
      });
    },
  },

  mounted() {
    axios.get("restaurants/my-jobs").then((response) => {
      this.jobs = response.data.data;
    });
  },
};
</script>
