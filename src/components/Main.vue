<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
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

</script>
<template>
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
</template>
<style scoped>



@media (min-width:768px) {
    .main-text{
        width: 746px;                    
        line-height: 1.3;
    }
    .main-text{
        font-size: 40px;
    }
    .main-p, .content-p{
        width: 563px;
    }
    .content-text{
      width: 350px;
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