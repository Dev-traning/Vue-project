<template>
  <div>
    <div class="card-body pl-4 w-100 bg-success border-0 d-flex rounded-3">
      <!-- <a href="default-settings.html" class="d-inline-block mt-2"><i class="ti-arrow-left font-sm text-white"></i></a> -->
      <h4 class="font-xs text-white fw-600 ms-4 mb-0 ">Job Create</h4>
    </div>
    <div class="card-body p-lg-3 p-4 w-100 border-0 ">
      <b-alert v-model="suuualert" variant="success" dismissible>
        {{ succses }}
      </b-alert>

      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ errmsg }}
      </b-alert>
      <form @submit.prevent="handalSubmit">
        <div class="row">
          <div class="col-lg-6 mb-6">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Title </label>
              <input type="text" class="form-control" v-model="title" />
            </div>
          </div>
          <div class="col-lg-6 mb-6">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Position</label>
              <input type="text" class="form-control" v-model="position" />
            </div>
          </div>

          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Experiance</label>
              <input type="text" class="form-control" v-model="experience" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Salary</label>
              <input type="text" class="form-control" v-model="salary" />
            </div>
          </div>
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Select</label><br />

              <div class="form-check form-check-inline mt-2">
                <input
                  class="form-check-input"
                  v-model="per"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="0"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >Per Month</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  v-model="per"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="1"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Per Year</label
                >
              </div>
              <!-- <input type="text" class="form-control" v-model="per"> -->
              <!-- <b-form-checkbox class="p-0 m-0 " v-model="per"    value="1"  unchecked-value="0" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Per Month /Year</b-form-checkbox> -->
            </div>
          </div>

          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Job Timing from</label>
              <input
                type="text"
                class="form-control"
                v-model="job_timing_from"
              />
            </div>
          </div>
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"> to</label>
              <input type="text" class="form-control" v-model="job_timing_to" />
            </div>
          </div>

          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Job Location</label>
              <input type="text" class="form-control" v-model="location" />
            </div>
          </div>

          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Description</label>
              <textarea
                v-model="description"
                class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                rows="5"
                placeholder="Write your message..."
                spellcheck="false"
              ></textarea>
            </div>
          </div>

          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Other Benfit</label>
              <input
                v-model="other_benefits"
                type="text"
                class="form-control"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
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
          <div class="col-lg-12">
            <b-button
              type="submit"
              style="background-color: #004898!important"
              class="w-100 font-xsssss fw-700 ps-3  pe-3 lh-32  mt-1 mb-0  text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto"
              >Job Create</b-button
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
  name: "CreateJob",
  data() {
    return {
      errmsg: "",
      succses: "",
      suuualert: false,
      showDismissibleAlert: false,
      description: "",
      title: "",
      photo: "",
      experience: "",
      position: "",
      per: "",
      salary: "",
      job_timing_to: "",
      job_timing_from: "",
      location: "",
      other_benefits: "",
      country_id: "101",
      state_id: "4030",
      city_id: "134096",
    };
  },
  methods: {
    onFileSelected(event) {
      this.photo = event.target.files[0];
    },
    async handalSubmit() {
      this.suuualert = false;
      this.succses = false;
      const photo = new FormData();
      if (this.photo) {
        photo.append("photo", this.photo, this.photo.name);
      }
      photo.append("title", this.title);
      photo.append("country_id", this.user.country_id);
      photo.append("state_id", this.user.state_id);
      photo.append("city_id", this.user.city_id);
      photo.append("description", this.description);
      photo.append("experience", this.experience);
      photo.append("position", this.position);
      photo.append("per", this.per);
      photo.append("salary", this.salary);
      photo.append("job_timing_to", this.job_timing_to);
      photo.append("job_timing_from", this.job_timing_from);
      photo.append("location", this.location);
      photo.append("other_benefits", this.other_benefits);

      const response = await axios
        .post("restaurants/job", photo, {
          onUploadProgress: (uploadEvent) => {
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          },
          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          this.succses = response.data.message;
          //  this.$router.push("/RecievedApp");
          this.suuualert = true;
        })
        .catch((error) => {
          this.errmsg = error.response.data.message;
          console.log(error);
          this.showDismissibleAlert = true;
        });
      console.log(response);

      (this.description = ""),
        (this.title = ""),
        (this.photo = ""),
        (this.experience = ""),
        (this.position = ""),
        (this.per = ""),
        (this.salary = ""),
        (this.job_timing_to = ""),
        (this.job_timing_from = ""),
        (this.location = ""),
        (this.other_benefits = "");
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
