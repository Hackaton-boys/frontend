import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

 export const useLoginStore = defineStore('login',() => {
    const token = ref('')
    const authenticated = ref('')
    if(localStorage.getItem('token')){
      token.value = localStorage.getItem('token');
      authenticated.value = true;
      axios.defaults.headers.common['Authorization'] = `Token ${token.value}`
    }else{
      token.value = ''
      authenticated.value = false
    }
    function setToken(newToken){
      token.value = newToken;
      authenticated.value = true;
      localStorage.setItem('token', newToken)
    }
    function removeToken(){
      token.value = '';
      authenticated.value = false;
      axios.defaults.headers.common['Authorization'] = ''
      localStorage.removeItem('token')
    }

    return{
      token,
      authenticated,
      setToken,
      removeToken,
    }
  })
  ;
