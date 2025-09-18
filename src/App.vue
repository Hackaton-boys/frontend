<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BolhaLogin from './components/BolhaLogin.vue';
import { useLoginStore } from '@/stores/usuario';
import axios from 'axios'
import { onMounted } from 'vue'
const loginStore = useLoginStore()

onMounted(() => {
  const token = loginStore.token
  if(token){
    axios.defaults.headers.common['Authorization'] = `Token ` + token
  }
  else{
    axios.defaults.headers.common['Authorization'] = ''
  }
})
</script>
<template>
  <HeaderComponent />
  <RouterView />
  <BolhaLogin />
</template>
<style scoped>

</style>
