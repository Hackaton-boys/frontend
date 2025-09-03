<script setup>
import { reactive, onMounted, computed } from 'vue';
import { useUsuarioStore } from '@/stores/usuario';

const usuarioStore = useUsuarioStore();

const bolhas = [
  { top: "10%", left: "5%", size: "150px"},
  { top: "20%", left: "80%", size: "100px"},
  { top: "70%", left: "10%", size: "120px"},
  { top: "80%", left: "70%", size: "180px"},
  { top: "50%", left: "50%", size: "90px"},
  { top: "30%", left: "40%", size: "130px"},
  { top: "60%", left: "20%", size: "110px"},
  { top: "40%", left: "80%", size: "140px"},
];

const defaultUsuario = {
  id_usuario: 0,
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: '',
  telefone: ''
};

const usuario = reactive({ ...defaultUsuario });

const isEditing = computed(() => usuario.id_usuario && usuario.id_usuario !== 0);

function resetForm() {
  Object.assign(usuario, { ...defaultUsuario });
}

onMounted(async () => {
  await usuarioStore.getUsuarios();
});

async function SubmitUsuario() {
  if (usuario.senha !== usuario.confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const payload = {
    nome: usuario.nome,
    email: usuario.email,
    telefone: usuario.telefone,
    password: usuario.senha
  };

  try {
    if (isEditing.value) {
      payload.id_usuario = usuario.id_usuario;
      await usuarioStore.updateUsuario(payload);
    } else {
      await usuarioStore.addUsuario(payload);
    }
    resetForm();
    await usuarioStore.getUsuarios();
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
    alert('Ocorreu um erro ao salvar o usuário. Veja o console para detalhes.');
  }
}
</script>

<template>
  <div class="app">
  <div v-for="(bolha, index) in bolhas" :key="index"
  class="bolha"
  :style="{
    top: bolha.top,
    left: bolha.left,
    width: bolha.size,
    height: bolha.size,}">
  </div>
  <div class="container">
    <div class="formulario">
    <h2>
      CRIE SUA CONTA
    </h2>
    <form @submit.Prevent="SubmitUsuario">
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-account"></i></span>
      <input type="text" placeholder="Nome Completo" id="nome" v-model="usuario.nome" />
      </div>
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-email"></i></span>
      <input type="email" placeholder="Email" id="email" v-model="usuario.email"/>
      </div>
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-lock"></i></span>
      <input type="password" placeholder="Senha" id="senha" v-model="usuario.senha"/>
      </div>
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-lock"></i></span>
      <input type="password" placeholder="Confirme sua senha" id="confirmar" v-model="usuario.confirmarSenha" />
      </div>
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-phone"></i></span>
        <input type="number" placeholder="Telefone" id="telefone" v-model="usuario.telefone"/>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
    </div>
  </div>
  </div>
</template>

<style scoped>
div.app {
 background-color: #215567;
}
  div.container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: 1;
  }
  div.formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 30px;
    text-align: center;
  }

  h2 {
    font-size: 3rem ;
    color: white;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  .input-field {
    display: flex;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 16px;
    border: 4px solid #BDD5D9;
    border-radius: 252px;
    background-color: white;
  }
  .input-field .icon {
    margin-right: 10px;
    color: #163a49;
    font-size: 1.2rem;
  }
  .input-field input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
  }

  button {
    padding: 10px;
    border-radius: 20px;
    background: none;
    border: 1px solid white;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .bolha {
    position: absolute;
    border-radius: 50%;
    opacity: 0.8;
    background: radial-gradient(circle at 190% 30%, #BDD5d9, #285b6c);
    animation: flutuar 6s ease-in-out infinite alternate;
    margin-top: 47vw;
  }
  @keyframes flutuar {
    from {
      transform: translateY(0) scale(1);
    }
    to {
      transform: translateY(-60px) scale(1.05);
    }
  }
</style>

