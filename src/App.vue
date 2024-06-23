<script setup>

import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const isActive = ref(false)
  
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1", 
    start: "top 55%",    
  }
});


tl.from(".box1", {
  opacity: 0,
  x: 100,
  duration: 1.2
});
tl.from(".box2", {
  opacity: 0,
  x: -100,
  duration: 1.2
});
tl.from(".box3", {
  opacity: 0,
  y: 100,  
  duration: 1.2
});
});


const toggleClass = () => {
      isActive.value = !isActive.value;
    }
</script>
<template>  
    <nav class="p-4">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button @click="toggleClass" type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                
                <img src="/svg/bx_bx-menu-alt-left.svg" class="h-6 w-6 outline-none" alt="open" srcset="" v-if="!isActive">
    
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" v-if="isActive">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="flex flex-1 justify-between">
              <div class="flex flex-shrink-0 items-center">
                <img src="../svg/logo green + black.svg" alt="logo" class="w-28 cursor-pointer">
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a href="#" class="rounded-md px-3 py-2 text-md font-medium text-gray-400 hover:bg-green-400 transition-all hover:text-white" aria-current="page">About</a>
                  <a href="#" class="rounded-md px-3 py-2 text-md font-medium text-gray-400 hover:bg-green-400 hover:text-white">FAQs</a>
                  <a href="#" class="rounded-md px-3 py-2 text-md font-medium text-gray-400 hover:bg-green-400 hover:text-white">Contact us</a>                  
                </div>
              </div>            
          </div>
        </div>
        </div>
      
        <!-- Mobile menu, show/hide based on menu state. -->
         <Transition name="fade">
          <div class="mobile-nav bg-green-400 rounded-r-3xl fixed h-full  left-0 z-10 w-30" id="mobile-menu" v-if="isActive">
            <div class="space-y-10 px-2 pb-3 py-12">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="block rounded-md  px-3 py-2 text-lg font-medium text-white" aria-current="page">About</a>
              <a href="#" class="block rounded-md px-3 py-2 text-lg font-medium text-white">FAQs</a>
              <a href="#" class="block rounded-md px-3 py-2 text-lg font-medium text-white">Contact us</a>            
            </div>
          </div>
         </Transition>        
      </nav>          
    <!-- MAIN -->
    <div class="main md:mx-auto md:px-2 lg:px-8 mt-3 md:mt-16">              
      <div class="px-6 space-y-6 ">
      <div class="top-icon flex justify-between md:justify-around">
        <img src="/svg/Davido.svg" alt="davido" class="w-16 h-14 mt-3">
        <img src="/svg/Propser.svg" alt="prosper" class="w-16 h-14">
      </div>
      
      <div class="text-center space-y-6 md:flex md:items-center md:flex-col">
        <h1 class="main-text text-3xl font-bold text-gray-600">Connect with professionals in your field without getting aired.</h1>
        <p class="main-p text-lg text-gray-400 font-light">For a small fee, ear1 allows you to get in touch with professionals in your field and build quality relationships with them.</p>                  
      </div>

      <div class="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <button class="bg-green-400 flex items-center rounded-md w-44 h-16 text-white px-5 py-4 space-x-3 hover:opacity-80">
          <img src="/svg/teenyicons_google-play-store-outline.svg" alt="" class="w-8 h-8">
          <p class="text-sm text-left font-medium">Get it on <span class="text-md font-semibold block">Google play</span></p>
        </button>
        <button class="bg-green-400 flex items-center rounded-md w-44 h-16 text-white px-5 py-4 space-x-3 hover:opacity-80">
          <img src="/svg/ant-design_apple-outlined.svg" alt="" class="w-8 h-8">
          <p class="text-sm text-left font-medium">Get it on <span class="text-md font-semibold block">App store</span></p>
        </button>                    
      </div>
      <div class="bottom-icon flex justify-between md:justify-evenly">
        <img src="/svg/Shola.svg" alt="shola" class="w-16 h-14 mt-3">
        <img src="/svg/Moe.svg" alt="moe" class="w-16 h-14">
      </div>
    </div>
    <div class="content bg-white text-center space-y-4 mt-10">
      <div class="box1 text-center p-6 flex flex-col items-center space-y-6 md:flex-row md:text-left lg:px-40">
        <div class="space-y-6">
        <h2 class="content-text text-2xl font-bold text-gray-600">Get in touch with those that <span class="text-green-400 italic"> inspire</span> you.</h2>
        <p class="text-md text-gray-300 font-normal ">ear1 provides a more efficient and faster way for you to reach out to those who inspires you, either in your career, or any other field of interest, and build great relationships with them.</p>
        </div>          
        <img src="/svg/image 5.svg" alt="image1" class=" w-72 md:w-80">
      </div>
      
      <div class="box2 text-center p-6 flex flex-col items-center space-y-6 md:flex-row-reverse md:text-left md:gap-x-6 lg:px-40">                          
        <div class="space-y-6">
          <h2 class="content-text text-2xl font-bold text-gray-600">You have <span class="text-green-400 italic"> zero</span> chances of not being replied.</h2>
          <p class="text-md text-gray-300 font-normal">Sending a DM should no more be an issue of shooting your shot or trying your luck. You’re paying, so you’re definitely going to get a response, and not just a response, but a conversation.</p>
          </div>          
          <img src="/svg/image 6.svg" alt="image1" class=" w-72 md:w-80">
      </div>      
      <div class="box3 text-center p-6 flex flex-col items-center space-y-6">                    
        <div class="space-y-6">              
        <h2 class="md:px-20 md:mx-10 text-2xl font-bold text-gray-600">There’s no <span class="text-green-400 italic"> better way</span> of reaching out to those who inspires you.</h2>
        <p class="md:px-10 md:mx-5 lg:px-40 lg:mx-20 text-md text-gray-300 font-normal">Ear1 lets influencers charge you a small fee to have a conversation with them. Being required to pay filters out all the unserious people so your favourite influencers can respond to you faster.</p>
        </div>          
        <img src="/svg/image 7.svg" alt="image1" class=" w-72 md:w-80">
      </div>      
    </div>
    <div class="bg-green-400 m-5 lg:mx-40 text-white px-4 py-8 md:px-10 lg:px-16 md:py-12 rounded-3xl flex flex-col items-center md:justify-between md:flex-row space-y-6 my-12 md:my-16">
      <div class="text-center space-y-6 md:text-left ">
        <h3 class="text-lg font-bold md:text-2xl">Build great relationships with those you admire.</h3>
        <p class="text-md font-medium">With ear1, replies to your DMs are guaranteed!</p>
      </div>
      <div class="space-y-6 md:flex md:space-y-0 md:space-x-4 md:items-center">
        <button class="flex bg-gray-600 items-center rounded-md w-44 h-14 text-white px-5 py-4 space-x-3 hover:opacity-80">
          <img src="/svg/teenyicons_google-play-store-outline.svg" alt="" class="w-8 h-8">
          <p class="text-sm text-left font-medium">Get it on <span class="text-md font-semibold block">Google play</span></p>
        </button>
        <button class="flex bg-gray-600 items-center rounded-md w-44 h-14 text-white px-5 py-4 space-x-3 hover:opacity-80">
          <img src="/svg/ant-design_apple-outlined.svg" alt="" class="w-8 h-8">
          <p class="text-sm text-left font-medium">Get it on <span class="text-md font-semibold block">App store</span></p>
        </button>                    
      </div>
    </div>
    </div>
    <!-- MAIN -->                            

    <!-- FOOTER -->
    <div class="footer bottom-0 bg-gray-600 w-full px-8 py-14 md:py-20   space-y-10 text-white md:flex  md:justify-around">      
      

      <div class="space-y-4">
        <img src="/svg/footer-logo.svg" alt="footer-logo">
        <div class="space-y-4">
          <h3 class="text-xl">© 2020 ear1Social</h3>
          <p class="text-gray-300 font-normal text-md">Privacy policy | Terms of service</p>
        </div>        
      </div>
      <div class="space-y-4">
        <h3 class="text-xl">Company</h3>
        <p class="text-gray-300 font-normal text-md cursor-pointer">About us</p>
        <p class="text-gray-300 font-normal text-md cursor-pointer">FAQs</p>
        <p class="text-gray-300 font-normal text-md cursor-pointer">Contact us</p>
      </div>
      <div class="space-y-4">
        <div class="space-y-4">
          <h3 class="text-xl">Get in touch</h3>
          <p class="text-gray-300 font-normal text-md">Questions or feedback?, we would love to hear from you</p>
        </div>
        <div class="flex space-x-4">
          <img src="/svg/facebook.svg" alt="facebook" class="cursor- cursor-pointerpointer">
          <img src="/svg/twitter.svg" alt="twitter" class="cursor-pointer">
          <img src="/svg/instagram.svg" alt="instagram" class="cursor-pointer">
        </div>
      </div>
    </div>
    <!-- FOOTER -->  
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.fade-enter-active, .fade-leave-active {
  transition: ease-in .5s;
  
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}


@media (min-width:768px) {
    .main-text{
        width: 746px;                    
        line-height: 1.3;
    }
    .content-text{
        width: 350px;
    }
    .main-text{
        font-size: 40px;
    }
    .main-p, .content-p{
        width: 563px;
    }
    .top-icon{
        gap: 600px;
        margin-bottom: -145px;
    }
    .bottom-icon{
        gap: 300px;
    }    
}
@media (min-width:1024px){
    .top-icon{
        gap: 300px;
        margin-bottom: -150px;
    }
    .bottom-icon{
        gap: 150px;
    }   
}
</style>