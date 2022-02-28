<template>
  <div>
    <b-modal
      id="modal-1"
      scrollable
      show-close="ftrue"
      hide-footer
      centered
      ref="modal"
      size="lg"
      class="rounded-0 "
    >
      <button
        @click="close()"
        type="button"
        class="closee"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div class="sticky-top ">
        <div class="row mt-4">
          <div class="col-sm text-center ">
            <router-link :to="'/Profile/' + current_id + '/Follow'">
              <b-button
                size="sm"
                variant="outline-primary"
                class="btn  shadow-none fw-500 font-xss text-primary-500 ls-2 "
                type="button"
                @click="activeBtn = 'btn1'"
                :class="{ active: activeBtn === 'btn1' }"
                >Followers</b-button
              >
            </router-link>
          </div>
          <div class="col-sm text-center ">
            <router-link :to="'/Profile/' + current_id + '/Following'">
              <b-button
                size="sm"
                variant="outline-primary"
                class="btn  shadow-none fw-500 font-xs text-primary-500 ls-1"
                type="button"
                @click="activeBtn = 'btn2'"
                :class="{ active: activeBtn === 'btn2' }"
                >Following</b-button
              ></router-link
            >
          </div>
          <div v-if="user_id == current_id" class="col-sm text-center ">
            <router-link :to="'/Profile/' + current_id + '/Request'">
              <b-button
                size="sm"
                variant="outline-primary"
                class="btn shadow-none fw-500 font-xs text-primary-500 ls-1"
                type="button"
                @click="activeBtn = 'btn3'"
                :class="{ active: activeBtn === 'btn3' }"
                >Request
              </b-button></router-link
            >
          </div>
        </div>
      </div>

      <p class="m-4 pl-5 pr-5 mt-2 text-justify">
        <router-view></router-view>
      </p>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Followers",
  props: {
    current_id: Number,
  },

  data() {
    return {
      activeBtn: "",
      user_id: "",
    };
  },

  mounted() {
    console.log(this.current_id);
    this.user_id = localStorage.getItem("user_id");
  },

  methods: {
    close() {
      this.$refs["modal"].hide();
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.active {
  background-color: #00244c;
}
.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
  outline: none;
}
</style>
