<template>
<div>
    <div class="main-wrapper">
        <div class="main-content right-chat-active">
            <div class="middle-sidebar-bottom">
                <div class="middle-sidebar-left">
                    <div class="row">
                        <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">

                            <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 ml-3">
                                <div class="item">
                                    <div class="overflow-hidden rounded-xxl">
                                        <div class="p-2 border-bottom card-body position-relative h130 bg-image-cover bg-image-center">

                                            <div class="d-flex row">

                                                <!-- <div class="col-lg-4">

                                       <div class="w-100">
                                                   <input title="Change Profile Photo" type="file" name="file" id="file" class="input-file"  @change="onFileChangee"  /> 
                                                   <label for="file">
                                                         <img src="" />

                                                         <div style="position: absolute;right: -13px;  top: 65px;">
                                                         <i class="mt-2 text-white feather-edit large-icon me-2 d-block"></i>
                                                       </div>
                                                   </label>
                                                </div>

                                   </div> -->

                                                <div class="col-lg-8">
                                                    <h3 class="mt-1 mb-2 ml-1 text-dark fw-500">{{user.full_name}}</h3>
                                                    <h5 class="mb-2 ml-1 text-grey-500 fw-600 font-xssss">{{users.user_type_text}}</h5>
                                                    <router-link class="p-2 mb-0 ml-1 text-white w-75 bg-info btn rounded-3 font-xsssss text-uppersace fw-600 ls-3" :to="'/profile/' + user.id" tag="button">View Profile</router-link>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="pb-3 text-center card-body d-block w-100 ps-4 pe-4">

                                            <div class="clearfix"></div>
                                            <p class="mt-0 mb-1 text-left fw-600 font-xsss text-grey-600 p-1">Billions of Restaurants, Vendors, Chefs, Captains
                                                are waiting for you at Restroworld.</p>
                                            <div class="clearfix mb-2"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-xxl-10 col-lg-9">

                            <div v-if="!user.is_subscribed">
                                <Search />
                            </div>
                            <div v-else style="background-color: hsl(32deg 100% 50%);" class="card w-100 shadow-xss rounded-xxl border-0 ps-4 pe-4 mb-3 subscribe">
                                <div class="row text-center">

                                    <div class="  ">
                                        <span class="font-xsss   fw-500  lh-28 mt-1 mb-1 rounded-3 ls-2   d-inline-block text-white me-1 ms-auto">Elite Account</span>
                                    </div>
                                </div>
                            </div>
                            <Posts />
                        </div>
                    </div>
                    <div class="row  ">

                        <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0  ">
                            <RestaurantAll />
                            <div class="row">
                                <VendorHome />
                            </div>
                            <SMRhome />
                        </div>
                        <div class="col-xl-6 col-xxl-6 col-lg-6">
                            <PostFeed />
                        </div>
                        <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
                            <ManpowerHome />
                            <div class="row">
                                <div>
                                    <FranchiseeHome />
                                </div>

                                <footer class="font-xssss fw-500 text-grey-500 text-center text-decoration-none">
                                    <div>
                                        <router-link to="#" class="font-xssss fw-500 text-grey-500">About Us</router-link>

                                        <router-link to="/home/User/Atmnirbhar" class="ml-3 font-xssss fw-500 text-grey-500" v-if="usersOldData.country.id=='101' && usersOldData.is_dsa=='0'">Atmnirbhar</router-link>
                                        <router-link to="#" class="ml-3 font-xssss fw-500 text-grey-500" v-else><span @click="panlel">Atmnirbhar Panel</span></router-link>
                                    </div>
                                    <div>
                                        <router-link to="#" class="font-xssss fw-500 text-grey-500">Franchisee</router-link>
                                        <router-link to="#" class="ml-3 font-xssss fw-500 text-grey-500">Privacy Policy</router-link>
                                    </div>
                                    <div>
                                        <router-link to="#" class="font-xssss fw-500 text-grey-500">Cancellation Policy</router-link>
                                        <router-link to="#" class="ml-3 font-xssss fw-500 text-grey-500">Terms &amp; Conditions</router-link>
                                    </div>
                                    <a href="#"><u>support@restroworld.com</u></a>
                                    <div class="mt-0"><span class="space1" style="color: rgb(0, 72, 152);">Restro</span><span class="space1" style="color: rgb(196, 30, 22);">world</span> Corporation © 2021</div>
                                </footer>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Posts from "../../components/Posts.vue";
import Search from "../../components/Subscribe/Search.vue";
import PostFeed from "../../components/Feed/PostFeed.vue";
import VendorHome from "../../components/Vendor/VendorHome.vue";
import SMRhome from "../../components/SMR/SMRhome.vue";
import ManpowerHome from "../../components/Manpower/ManpowerHome.vue";
import RestaurantAll from "../../components/Restaurant/RestaurantAll.vue";
import FranchiseeHome from "../../components/Franchisee/FranchiseeHome.vue";

import {
    mapGetters
} from "vuex";
import axios from 'axios';
export default {
    name: "User",
    components: {

        Posts,
        Search,
        PostFeed,
        RestaurantAll,
        VendorHome,
        SMRhome,
        ManpowerHome,
        FranchiseeHome

    },

    data() {
        return {
            users: [],
            usersOldData: ''

        }
    },
    methods: {
        panlel() {
            alert('comming Soon')
        },
        onFileChangee(e) {

            this.photo = e.target.files[0];

            const UpdateProfile = new FormData();
            if (this.photo) {
                UpdateProfile.append("photo", this.photo, this.photo.name);
            }

            UpdateProfile.append("first_name", this.users.first_name);
            UpdateProfile.append("last_name", this.users.last_name);
            UpdateProfile.append("mobile_no", this.users.mobile_no);
            UpdateProfile.append("birth_date", this.users.birth_date);
            UpdateProfile.append("gender", '1');
            UpdateProfile.append("country_id", '101');
            UpdateProfile.append("state_id", '4030');
            UpdateProfile.append("city_id", '57606');
            UpdateProfile.append("address", '123, Jamna nagar');
            UpdateProfile.append("pin_code", '365490');

            const response = axios.post('users/' + this.users.id, UpdateProfile)
                .then((result) => {
                    this.user.profile_photo = result.data.data.profile_photo
                    this.user.profile_photo.push();
                });
            console.log(response);
            this.user.profile_photo = URL.createObjectURL(e.target.files[0]);
        },

    },
    computed: {
        ...mapGetters(["user"]),
    },

    async mounted() {
        this.usersOldData = JSON.parse(localStorage.getItem("UserDetails"));
        let user = localStorage.getItem("token");
        this.users = JSON.parse(localStorage.getItem("UserDetails"));
        if (!user) {
            this.$router.push({
                name: "/"
            });
        }
    },
};
</script>
