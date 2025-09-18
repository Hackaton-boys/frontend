import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

 export const useLoginStore = defineStore('login',() => {
    const token = ref('')
    const authenticated = ref('')
    const usuario = reactive({
    username: '',
    email: '',
    phone: '',
  })
    if(localStorage.getItem('token')){
      token.value = localStorage.getItem('token');
      authenticated.value = true;
      axios.defaults.headers.common['Authorization'] = `Token ${token.value}`
      getUserData()
    }else{
      token.value = ''
      authenticated.value = false
    }
    function setToken(newToken){
      token.value = newToken;
      authenticated.value = true;
      localStorage.setItem('token', newToken)
      getUserData()
    }
    function removeToken(){
      token.value = '';
      authenticated.value = false;
      axios.defaults.headers.common['Authorization'] = ''
      localStorage.removeItem('token')
      clearUserData()
    }

    function clearUserData() {
    usuario.username = ''
    usuario.email = ''
    usuario.phone = ''
    }

    async function getUserData() {
    try {
      const res = await axios.get('/api/user/') // <-- ajuste o endpoint correto da sua API
      usuario.username = res.data.username
      usuario.email = res.data.email
      usuario.phone = res.data.phone
    } catch (err) {
      console.error('Erro ao buscar dados do usuário:', err)
      removeToken()
    }
  }

    return{
      token,
      authenticated,
      setToken,
      removeToken,
      usuario,
      getUserData
    }
  })
  ;
