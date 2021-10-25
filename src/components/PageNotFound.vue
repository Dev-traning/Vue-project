<template>
<div >
   <div class="main-wrapper" style="">
      <div class="main-content right-chat-active">
         <div class="middle-sidebar-bottom">
            <div class="middle-sidebar-left">
               <div class="row">
                  <div  >
                     <div class="row">
                        <div class="col-sm-12 text-center">
                           <div class="card w-100 shadow-xss rounded-xxl border-0"  >
                              <div >
                                 <div class="row">
                                    <div class=" p-4 pt-0">
                                    
                                          <div class="content mt-5">
                                             <h1 class="text-left font-xl  fw-600 text-center  mt-5" style="color: rgb(0, 72, 152);, padding-top: 161px;">OOPS! </h1>
                                             <p class="mb-4 mb-2">Sorry, the page you are looking for doesn't exist.</p>
                                             <img src="../assets/404.svg" class="mb-5"  height="170px">
                                            
                                          </div>
                                          <div class="mt-4">
                                            <router-link class="btn bg-info text-white fw-300 font-xss" to="/home/user">Go to Home</router-link>
                                          </div>
                                  
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
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
export default {
    Name:'Fail'
}
</script>


<style scoped>
 
     
       
    
   
       

        .content 
        {
            text-align:center;
        }

        .content  h1
        {
            font-size:25px;
            padding-top:25px;
        }

        .content a
        {
            width:200px;
            height:35px;
            color:#fff;
            border-radius:30px;
            padding:5px 10px;
            background:#f01b1b;
            transition:all ease-in-out 0.3s;
        }

        .content a:hover
        {
            text-decoration:none;
            background:#000;
        }
</style>