<template>
  <div class="border-info-md rounded-lg shadow-md mt-2">
    <div class="pl-4 border-0 card-body w-100 bg-success d-flex rounded-3">
      <h4 class="mt-2 mb-0 text-white font-xs fw-600 ms-4">
        Recieved Quotes for requirements
      </h4>
    </div>
    <div class="p-1 border-0 card-body p-lg-3 w-100 ">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Requment Title</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Remark</th>
            <th scope="col">Rate</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(reciItem, i) in recived" v-bind:key="reciItem.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ reciItem.title }}</td>
            <td>
              {{ reciItem.user.first_name }} {{ reciItem.user.last_name }}
            </td>
            <td>{{ reciItem.vendor_interest.mobile_no }}</td>
            <td>{{ reciItem.vendor_interest.remark }}</td>
            <td>{{ reciItem.vendor_interest.rate }}</td>
            <td>
              <router-link :to="'/profile/' + reciItem.user.id"
                ><i class="p-0 feather-eye font-md p-1"></i
              ></router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  Name: "RecievedQuote",
  data() {
    return {
      recived: "",
    };
  },
  methods: {
    getData() {
      axios
        .get("restaurants/received-interested-requirements")
        .then((result) => {
          this.recived = result.data.data;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
