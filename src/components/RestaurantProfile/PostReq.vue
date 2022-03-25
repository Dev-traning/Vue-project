<template>
  <div class="shadow-md rounded-lg mt-2">
    <div class="card-body w-100 bg-success border-0 d-flex rounded-3">
      <!-- <a href="default-settings.html" class="d-inline-block mt-2"><i class="ti-arrow-left font-sm text-white"></i></a> -->
      <h4 class="font-xs text-white fw-600 mb-0">Post My Requirement</h4>
    </div>
    <div
      class="card-body p-lg-3 p-4 w-100 border-0 "
      v-if="is_subscribed === user.is_subscribed"
    >
      <b-alert v-model="suuualert" variant="success" dismissible>
        {{ succses }}
      </b-alert>

      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ errmsg }}
      </b-alert>
      <form @submit.prevent="handalSubmit">
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Title</label>
              <input type="text" class="form-control" v-model="title" />
            </div>
          </div>
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Description</label>
              <textarea
                class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                rows="5"
                placeholder="Write your message..."
                spellcheck="false"
                v-model="description"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 ">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Upload Image</label>
              <b-form-group label-cols-sm="0" label-size="sm">
                <b-form-file
                  id="file-small"
                  @change="onFileSelected"
                ></b-form-file>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12  ">
            <b-button
              type="submit"
              style="background-color: #004898!important"
              class="w-100 font-xsssss fw-700 ps-3  pe-3 lh-32  mt-1 mb-0  text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto"
              >Create</b-button
            >
          </div>
        </div>
      </form>
    </div>

    <div class="card-body p-lg-3 p-4 w-100 border-0 " v-else>
      <b-alert show variant="warning"
        >You need to subscribe to acceess this facility</b-alert
      >
      <form>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Title</label>
              <input type="text" class="form-control" disabled />
            </div>
          </div>
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Description</label>
              <textarea
                class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                rows="5"
                placeholder="Write your message..."
                spellcheck="false"
                disabled
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="card mt-3 border-0">
              <div
                class="card-body d-flex justify-content-between align-items-end p-0"
              >
                <div class=" mb-2 w-100">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    class="input-file"
                    disabled
                  />
                  <label
                    for="file"
                    class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                  >
                    <i class="ti-cloud-down large-icon me-3 d-block"></i>
                    <span class="js-fileName"
                      >Drag and drop or click to replace</span
                    >
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mt-2">
            <b-button
              type="submit"
              style="background-color: #004898!important"
              class="w-100 font-xsssss fw-700 ps-3  pe-3 lh-32  mt-1 mb-0  text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto"
              disabled
              >Create</b-button
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "PostReq",
  data() {
    return {
      is_subscribed: true,
      description: " ",
      title: "",
      photo: "",
      errmsg: "",
      succses: "",
      suuualert: false,
      showDismissibleAlert: false,
    };
  },
  methods: {
    onFileSelected(event) {
      this.photo = event.target.files[0];
    },
    async handalSubmit() {
      const resquirment = new FormData();
      if (this.photo) {
        resquirment.append("photo", this.photo, this.photo.name);
      }
      resquirment.append("description", this.description);
      resquirment.append("title", this.title);

      const response = await axios
        .post("restaurants/requirement", resquirment)
        .then((response) => {
          this.succses = response.data.message;
          this.$router.push("/ShowRequirment");
          this.suuualert = true;
        })
        .catch((error) => {
          this.errmsg = error.response.data.message;
          console.log(error);
          this.showDismissibleAlert = true;
        });

      console.log(response);
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
