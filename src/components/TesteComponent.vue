<script setup>
  import { useLoginStore } from '@/stores/usuario';
  import { useRouter } from 'vue-router';
  const loginStore = useLoginStore()
  const router = useRouter()

  function logout(){
    router.push('/')
    loginStore.removeToken()
  }

</script>
<template>
  <div class="dashboard">
    <header class="header">
      <div class="avatar"></div>
      <span class="username">Nome Usuario</span>
    </header>

    <div class="conteudo">
      <aside class="sidebar">
        <button class="btn">Pedidos</button>
        <button class="btn">Gerenciar conta</button>
        <button class="btn sair" @click="logout" >Desconectar</button>
      </aside>

      <!-- Main -->
      <main class="main">
        <div class="card"><p>Pedido</p><p>Qtd: 2</p><p>Retirar em: R. Joaquim João Luiz, 216</p><p>Valor: R$25</p></div>
        <div class="card"><p>Pedido</p><p>Qtd: 2</p><p>Retirar em: R. Joaquim João Luiz, 216</p><p>Valor: R$25</p></div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  background: #215567;
  min-height: 70vh;
  border-radius: 12px;
  padding: 20px;
  color: white;
  font-family: "Segoe UI", Arial, sans-serif;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #2d6f7f;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 2;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #a3cfd6;
  border: 2px solid white;
}

.username {
  background: #a3cfd6;
  color: black;
  padding: 6px 18px;
  border-radius: 10px;
}

.conteudo {
  display: flex;
  margin-top: 20px;
  flex: 1;
  height: 100%;
  z-index: 2;
}

.sidebar {
  width: 180px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  background: #2d6f7f;
  color: white;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: 0.2s;
  font-size: 0.95rem;
}

.btn:hover {
  background: #3c8c9f;
  transform: translateY(-2px);
}

.sair {
  margin-top: auto;
  background: #a85d5d;
}

.main {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;
}

.card {
  background: #a3cfd6;
  height: 100px;
  border-radius: 12px;
  position: relative;
  z-index: 1;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  z-index: 2;
}

.card p{
  padding: 1vw;
  color: #18434f;
  z-index: 2;
}

.dashboard::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: -65vh;
  left: 70px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #a3cfd6, #1e4f5c);
  z-index: 0;
}
</style>
