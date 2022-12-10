import Vue from "vue";

import Router from "vue-router";

// Restaurant

import Home from "./components/Home.vue";
import PageNotFound from "./components/PageNotFound.vue";

import Register from "./components/Register.vue";

import MailVerify from "./components/Auth/MailVerify.vue";
import UserStore from "./components/Auth/UserStore.vue";
import Login_modify from "./components/Auth/Login_modify.vue";
import PasswordReset from "./components/Auth/PasswordReset.vue";

//Register
import RegisterNew from "./components/Auth/RegisterNew.vue";
import OtpVery from "./components/Auth/OtpVery.vue";
import EliteUser from "./components/Auth/EliteUser.vue";

import Forgot from "./components/Auth/Forgot.vue";
import Posts from "./components/Posts.vue";
import PostsShow from "./components/PostsShow.vue";

import Wallet from "./components/Wallet.vue";

import LikeStore from "./components/LikeStore.vue";
import Comment from "./components/Comment.vue";
import Country from "./components/Country.vue";

// Restaurant Profile
import Listings from "./components/RestaurantProfile/Listings.vue";
import Profile from "./components/RestaurantProfile/Profile.vue";
import PostReq from "./components/RestaurantProfile/PostReq.vue";
import EditProfile from "./components/RestaurantProfile/EditProfile.vue";
import CreateJob from "./components/RestaurantProfile/CreateJob.vue";
import ViewEnquiry from "./components/RestaurantProfile/ViewEnquiry.vue";
import ShowRequirment from "./components/RestaurantProfile/ShowRequirment.vue";
import RecievedQuote from "./components/RestaurantProfile/RecievedQuote.vue";
import AllVendors from "./components/RestaurantProfile/AllVendors.vue";
import RecievedApp from "./components/RestaurantProfile/RecievedApp.vue";
import Allmanpower from "./components/RestaurantProfile/Allmanpower.vue";
import Franchisee from "./components/RestaurantProfile/Franchisee.vue";
import Sellrest from "./components/RestaurantProfile/Sellrest.vue";
import SellrestEdit from "./components/RestaurantProfile/SellrestEdit.vue";
import SmrEdit from "./components/RestaurantProfile/SmrEdit.vue";

// SMR

import SMRShow from "./components/SMR/SMRShow.vue";

// Franchisee

import FranchiseeShow from "./components/Franchisee/FranchiseeShow.vue";

// Manpower

import ManpowerListings from "./components/Manpower/ManpowerListings.vue";
import ManpowerEditProfile from "./components/Manpower/ManpowerEditProfile.vue";
import MyAppliedJobs from "./components/Manpower/MyAppliedJobs.vue";
import JobsList from "./components/Manpower/JobsList.vue";
import ManpowerShow from "./components/Manpower/ManpowerShow.vue";

// Vendor
import VendorListing from "./components/Vendor/VendorListing.vue";
import VendorEditProfile from "./components/Vendor/VendorEditProfile.vue";
import Enquiries from "./components/Vendor/Enquiries.vue";
import requirements from "./components/Vendor/Requirements.vue";
import VendorShow from "./components/Vendor/VendorShow.vue";

// Suscribe

import Search from "./components/Subscribe/Search.vue";
import Fail from "./components/Subscribe/Fail.vue";
import Success from "./components/Subscribe/Success.vue";

//Header
import Help from "./components/Header/Help.vue";
import Privecy from "./components/Header/Privecy.vue";
import Setting from "./components/Header/Setting.vue";

// atmnirbhar
import Atmnirbhar from "./components/Atmnirbhar/Atmnirbhar.vue";
import AtmPaySuc from "./components/Atmnirbhar/AtmPaySuc.vue";
// Post feed

import PostFeed from "./components/Feed/PostFeed.vue";

// RestaurantAll

import RestaurantAll from "./components/Restaurant/RestaurantAll.vue";
import RestaurantList from "./components/Restaurant/RestaurantList.vue";

import MyPost from "./components/RestaurantProfile/MyPost.vue";

import CommentShow from "./components/RestaurantProfile/CommentShow.vue";

// Landing

import User from "./components/Landing/User.vue";
import PostsSingle from "./components/Landing/PostsSingle.vue";
import ReadMore from "./components/Landing/ReadMore.vue";

// Followers

import Followers from "./components/Following/Followers.vue";
import Following from "./components/Following/Following.vue";
import Request from "./components/Following/Request.vue";
import Follow from "./components/Following/Follow.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Login_modify,

      children: [
        {
          name: "OtpVery",
          path: "/OtpVery",
          component: OtpVery,
        },
      ],
    },
    { path: "/reset-password", component: PasswordReset },
    { path: "*", component: PageNotFound },
    {
      path: "/Home",
      component: Home,
      redirect: "/Home/User",
      children: [
        {
          path: "/Home/User",
          component: User,
        },
        // { path: "*", component: PageNotFound },

        {
          path: "/Profile/:id",
          component: Profile,
          name: "Profile",
          children: [
            {
              name: "Following",
              path: "/Profile/:id/Following",
              component: Following,
            },
            {
              name: "Request",
              path: "/Profile/:id/Request",
              component: Request,
            },
            {
              name: "Follow",
              path: "/Profile/:id/Follow",
              component: Follow,
            },
          ],
        },

        {
          path: "/home/User/Atmnirbhar",
          component: Atmnirbhar,
        },

        {
          path: "/home/User/Fail",
          component: Fail,
        },
        {
          path: "/home/User/Success",
          component: Success,
        },
        
        {
          path: "/home/User/AtmPaySuc",
          component: AtmPaySuc,
        },

        {
          path: "/home/User/help",
          component: Help,
        },
        {
          path: "/home/User/privecy",
          component: Privecy,
        },
        {
          path: "/home/User/setting",
          component: Setting,
        },

        {
          path: "/posts/:id",
          component: PostsSingle,
        },
        {
          path: "/read-more/:user_type_text/:id",
          component: ReadMore,
        },

        {
          path: "/RestaurantList",
          component: RestaurantList,
          children: [
            {
              path: "/VendorShow/:user_type",
              component: VendorShow,
            },
            {
              path: "/ManpowerShow",
              component: ManpowerShow,
            },
            {
              path: "/SMRShow/:user_type",
              component: SMRShow,
            },
            {
              path: "/FranchiseeShow",
              component: FranchiseeShow,
            },
          ],
        },
      ],
    },

    {
      name: "Followers",
      path: "/Profile/:id/Followers",
      component: Followers,
    },

    {
      path: "/Register",
      component: Register,
      redirect: "/UserStore",
      children: [
        {
          name: "UserStore",
          path: "/UserStore",
          component: UserStore,
          redirect: "/RegisterNew",
          children: [
            {
              name: "RegisterNew",
              path: "/RegisterNew",
              component: RegisterNew,
            },
            {
              name: "EliteUser",
              path: "/EliteUser",
              component: EliteUser,
            },
          ],
        },

        {
          name: "MailVerify",
          path: "/MailVerify",
          component: MailVerify,
        },
      ],
    },

    { path: "/Forgot", component: Forgot },
    { path: "/Posts", component: Posts },
    { path: "/PostsShow", component: PostsShow },

    {
      name: "MyPost",
      path: "/Profile/:id/MyPost",
      component: MyPost,
    },

    { path: "/CommentShow", component: CommentShow },
    { path: "/Wallet", component: Wallet },

    { path: "/LikeStore", component: LikeStore },
    { path: "/Comment", component: Comment },
    { path: "/Country", component: Country },

    { path: "/Search", component: Search },
    // { path: '/home/User/Fail', component: Fail },

    { path: "/PostFeed", component: PostFeed },

    { path: "/RestaurantAll", component: RestaurantAll },

    {
      path: "/VendorListing",
      component: VendorListing,
      children: [
        {
          name: "VendorEditProfile",
          path: "/VendorListing/VendorEditProfile/:id",
          component: VendorEditProfile,
        },
        {
          path: "/VendorListing/Enquiries",
          component: Enquiries,
        },
        {
          path: "/VendorListing/requirements",
          component: requirements,
        },
      ],
    },
    {
      path: "/ManpowerListings",
      component: ManpowerListings,
      children: [
        {
          name: "ManpowerEditProfile",
          path: "/ManpowerListings/ManpowerEditProfile/:id",
          component: ManpowerEditProfile,
        },
        {
          path: "/ManpowerListings/MyAppliedJobs",
          component: MyAppliedJobs,
        },
        {
          path: "/ManpowerListings/JobsList",
          component: JobsList,
        },
      ],
    },
    {
      path: "/Listings",
      component: Listings,
      children: [
        {
          name: "EditProfile",
          path: "/EditProfile/:id",
          component: EditProfile,
        },
        {
          path: "/CreateJob",
          component: CreateJob,
        },
        {
          path: "/PostReq",
          component: PostReq,
        },
        {
          path: "/ViewEnquiry",
          component: ViewEnquiry,
        },
        {
          path: "/ShowRequirment",
          component: ShowRequirment,
        },
        {
          path: "/RecievedQuote",
          component: RecievedQuote,
        },
        {
          path: "/AllVendors",
          component: AllVendors,
        },
        {
          path: "/RecievedApp",
          component: RecievedApp,
        },
        {
          path: "/Allmanpower",
          component: Allmanpower,
        },
        {
          path: "/Franchisee",
          component: Franchisee,
        },
        {
          path: "/SellRest",
          component: Sellrest,
        },
        {
          path: "/SellrestEdit",
          component: SellrestEdit,
        },
        {
          path: "/SmrEdit",
          component: SmrEdit,
        },
      ],
    },
  ],
});
