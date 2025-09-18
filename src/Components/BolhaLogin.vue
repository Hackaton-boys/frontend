<script setup>
import { useLoginStore } from '@/stores/usuario';
const loginStore = useLoginStore()
import { useRouter } from 'vue-router';
const router = useRouter()

const pagina = (() => router.push('/usuario'))

</script>
<template>
<div class="container" @click="pagina">
  <div class="login" v-if="loginStore.authenticated">
    <p class="title">
      Conectado como:
    </p>
    <button @click="loginStore.removeToken()">desconectar</button>
  </div>
</div>
</template>
<style scoped>
.login {
  position: fixed;
  bottom: 20px;   /* distancia do fundo */
  right: 20px;    /* distancia da lateral */
  background: rgba(255,255,255, 0.1);
  padding: 12px 16px;
  border: color(#ffffff) 1px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 9999;  /* garante que fique sempre em cima */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  backdrop-filter: blur(4px);

}

.login .title {
  font-size: 14px;
  margin: 0;
}
</style>
