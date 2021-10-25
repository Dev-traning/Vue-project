<template>
<div class="p-4 mb-3 mt-3 border-0 card w-100 shadow-xss rounded-xxl">
   <div class="p-0 card-body d-flex">
      <figure class="avatar me-3"> <img src="http://uitheme.net/sociala/images/user-8.png" alt="image" class="shadow-sm rounded-circle w45"/> </figure>
      <h4 class="mt-1 fw-700 text-grey-900 font-xssss"> Anthony Dauglodddi <span class="mt-1 d-block font-xssss fw-500 lh-3 text-grey-500"> 2 hour ago</span > </h4>
      <b-dropdown style="margin: -30px 60px 0px 0px;" size="lg" id="dropdownMenu5" variant="link" toggle-class="text-decoration-none" class="ms-auto" no-caret >
         <template #button-content> <a href="#" class="ms-auto" data-bs-toggle="dropdown" aria-expanded="false" ><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" ></i ></a> </template>
         <b-dropdown-item href="#">
            <div class="p-0 mr-2 card-body d-flex">
               <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4">Edit</h4>
            </div>
         </b-dropdown-item>
         <b-dropdown-item href="#">
            <div class="p-0 mt-2 card-body d-flex">
               <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4">Share</h4>
            </div>
         </b-dropdown-item>
         <b-dropdown-item href="#">
            <div class="p-0 mt-2 card-body d-flex">
               <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4">Delete</h4>
            </div>
         </b-dropdown-item>
      </b-dropdown>
    
   </div>
   <div class="p-0 card-body me-lg-5">
      <p class="fw-500 text-grey-500 lh-26 font-xssss w-100"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus <a href="#" class="fw-600 text-primary ms-2">See more</a> </p>
   </div>
   <div class="p-0 mb-3 card-body d-block">
      <div class="row ps-2 pe-2">
         <div class="p-1 col-xs-6 col-sm-6"> <a href="https://www.restroworld.com/public/storage/posts/138/welcom-cafe-cambay-138.jpg" data-lightbox="roadtri" ><img src="https://www.restroworld.com/public/storage/posts/138/welcom-cafe-cambay-138.jpg" class="rounded-3 w-100" alt="image"/></a> </div>
         <div class="p-1 col-xs-6 col-sm-6"> <a href="images/t-32.jpg" data-lightbox="roadtri" ><img src="https://www.restroworld.com/public/storage/posts/130/hakkasan-hotel-mumbai-130.jpg" class="rounded-3 w-100" alt="image"/></a> </div>
      </div>
      <div class="row ps-2 pe-2">
         <div class="p-1 col-xs-4 col-sm-4"> <a href="images/t-33.jpg" data-lightbox="roadtri" ><img src="http://uitheme.net/sociala/images/t-23.jpg" class="rounded-3 w-100" alt="image"/></a> </div>
         <div class="p-1 col-xs-4 col-sm-4"> <a href="images/t-34.jpg" data-lightbox="roadtri" ><img src="http://uitheme.net/sociala/images/t-24.jpg" class="rounded-3 w-100" alt="image"/></a> </div>
         <div class="p-1 col-xs-4 col-sm-4"> <a href="images/t-35.jpg" data-lightbox="roadtri" class="position-relative d-block" ><img src="http://uitheme.net/sociala/images/t-25.jpg" class="rounded-3 w-100" alt="image"/><span class="text-white img-count font-sm ls-3 fw-600" ><b>+2</b></span ></a > </div>
      </div>
   </div>
   <div class="p-0 card-body d-flex">
      <a href="#" class=" emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2" ><i class="text-white feather-thumbs-up bg-primary-gradiant me-1 btn-round-xs font-xss" ></i> <i class="text-white feather-heart bg-red-gradiant me-2 btn-round-xs font-xss" ></i >2.8K Likes</a > 
      <div class="emoji-wrap">
         <ul class="mb-0 emojis list-inline">
            <li class="emoji list-inline-item"><i class="em em---1"></i></li>
            <li class="emoji list-inline-item"><i class="em em-angry"></i></li>
            <li class="emoji list-inline-item"> <i class="em em-anguished"></i> </li>
            <li class="emoji list-inline-item"> <i class="em em-astonished"></i> </li>
            <li class="emoji list-inline-item"><i class="em em-blush"></i></li>
            <li class="emoji list-inline-item"><i class="em em-clap"></i></li>
            <li class="emoji list-inline-item"><i class="em em-cry"></i></li>
            <li class="emoji list-inline-item"> <i class="em em-full_moon_with_face"></i> </li>
         </ul>
      </div>
      <a href="#" class=" d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss" ><i class=" feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" ></i ><span class="d-none-xss">22 Comments</span></a > <a href="#" class=" ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss" ><i class=" feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" ></i ><span class="d-none-xs">Share</span></a > 
   </div>
</div>


</template>

<script>
export default {
  Name: "MyPost",
};
</script>
