<script setup>
import {ref} from 'vue'
const isActive = ref(false)
const toggleClass = () => {
      isActive.value = !isActive.value;
    }
</script>
<template> 
    <div clas="bg-red-400">
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
                <img src="/svg/logo green + black.svg" alt="logo" class="w-28 cursor-pointer">
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
    </div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: ease-in .5s;
  
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>