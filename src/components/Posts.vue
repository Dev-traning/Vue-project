<template>
<div class="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-3 pe-4 pb-3 mb-3">
    <div class="card-body p-0 mt-0 position-relative">
        <figure class="avatar position-absolute ms-2 mt-1 top-5">
            <img :src="`${user.profile_photo}`" alt="image" height="30" class="shadow-sm rounded  w30" v-if="user.profile_photo" />
            <img src="../assets/img/profile-no-img.99d6b3a5.png" alt="image" height="30" class="shadow-sm rounded  w30" v-else />
            <!-- <img style=" position: absolute;top: -3px;left: 16px;width: 47%;" src="./../assets/img/bluetick_small_icone.png" alt="Blue Tick Icon" class="text-primary ms-2"> -->
        </figure>
        
        <b-button v-b-modal.modal-center name="message" class="h150 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind?">
            <p style="    float: left; margin-bottom: 100px;     color: rgb(33 37 41 / 60%);">Please Share Your Restroworld Stories!</p>
        </b-button>
        <!-- <b-button v-b-modal.modal-center >Launch centered modal</b-button> -->
        <b-modal scrollable ref="postmodel" show-close="ftrue" hide-footer id="modal-center" centered size="lg">
            <button @click="modelClose()" type="button" class="closee" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-header pl-4 m-0 pb-0">
                <h2 class="modal-title m-0 p-0"><ins>Create Post</ins></h2>
            </div>
            <form ref="form" v-on:submit.prevent="handalSubmit" class="p-4 pt-2">
                <error v-if="error" :error="error" />
                <b-form-group class=" mb-1 mt-0" label="Title" label-for="name-input" invalid-feedback="Name is required">
                    <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md " id="name-input" v-model="title"></b-form-input>
                </b-form-group>
                <b-form-group class=" mb-2 mt-0" label="Location" label-for="name-input" invalid-feedback="Name is required">
                    <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="location"></b-form-input>
                </b-form-group>
                <b-form-group class="mb-0" label="Description" label-for="name-input" invalid-feedback="Name is required">
      <textarea name="message" v-model="description" class="h100 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind?"></textarea>
    </b-form-group>
                <div class="card-body d-flex p-0 mt-2 mb-2">
                    <a href="#" class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4">
                        <div class="left">
                            <label class="file">
                                <i class="font-md text-success feather-image me-2"></i>
                                <span class="d-none-xs">Photo</span>
                                <input type="file" class="images[]" name="images" id="file-small" @change="imageupload($event.target.name, $event.target.files)" multiple accept="image/*">
                            </label>
                        </div>
                    </a>
                    <div class="img-wrap  d-flex">
                        <div v-for="(img,index) in url" :key="img">
                            <b-img class="p-1" v-bind="mainProps" rounded :src="img" alt="Top-rounded image" width="50" height="50"></b-img>
                            <span type='button' class="closed" @click="removeImage(index)">&times;</span>
                        </div>
                    </div>
                </div>
                <b-button type="submit" style="background-color: #004898!important" class="font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100">{{loading ? "Loading..." : "Post"}}</b-button>
            </form>
        </b-modal>
        <BlueTick_Popup ref="modal"></BlueTick_Popup>

    </div>
</div>
</template>

<script>
import axios from "axios";
import Error from "./Error.vue";
import BlueTick_Popup from './Home.vue'; // Import your modal component

import {
    mapGetters,
} from 'vuex'
export default {
    name: 'Posts',
    components: {
        Error,
        BlueTick_Popup
    },
    data() {
        return {
            description: " ",
            title: "",
            tags: '',
            loading: '',
            images: [],
            fileList: '',
            url: []

        };
    },
    methods: {

        modelClose() {
            this.$refs['postmodel'].hide()
        },

        imageupload(images, fileList) {
            this.images = fileList;
            [...this.images].forEach((value, index) => {
                var indadd = window.URL.createObjectURL(fileList[index])
                this.url.push(indadd)
                console.log(this.url)
            });

            console.log(fileList);
        },

        removeImage(index) {
            this.url.splice(index, 1)
        },

        async handalSubmit() {

            const postCreate = new FormData();
            [...this.images].forEach((value, index) => {
                var img = `medias`
                var ind = `[${index}]`
                postCreate.append(img + ind, value);
            });
            postCreate.append('description',this.description);
            postCreate.append('title', this.title)
            postCreate.append('tags', this.tags)
            try {
                this.loading = true;
                const response = await axios.post('posts', postCreate, {}).then(res => {
                    console.log(res)
                    this.loading = false;
                    this.$router.push('/');
                }).catch(err => {

                    setTimeout(function (scope) {
                        scope.loading = false;
                    }, 1000, this);
                    console.log(err)

                    alert('One Field Is Required too')
                })

                console.log(response);

            } catch (e) {
                this.error = "Error occurred!";
            }
        },
    },
    computed: {
        ...mapGetters({
            user: 'user'
        })
    },
    mounted(){
       
    }

}
</script>

<style scoped>
input[type="file"] {
    display: none;
}

.img-wrap {
    position: relative;

}

.img-wrap .close {
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 100;

}

.closed {

    border: 0;
    position: absolute;
    right: -10px;
    top: -6px;
    opacity: 1;
    z-index: 2;
    width: 17px;
    width: 23px;
    eight: 24px;
    border-radius: 20px;
    display: inline-block;
    line-height: 10px;
    background-color: transparent;
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #ff0202;
    text-shadow: 0 1px 0 #fff;

}

.img-wrap .close[data-v-67344653] {
    position: absolute;
    top: -3px;
    right: -16px;
    z-index: 100;
}
</style>
