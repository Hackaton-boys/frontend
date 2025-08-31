<script>
export default {
  name: 'CadastroComponent',
  data() {
    return {
      bolhas: [
        { top: "10%", left: "5%", size: "150px"},
        { top: "20%", left: "80%", size: "100px"},
        { top: "70%", left: "10%", size: "120px"},
        { top: "80%", left: "70%", size: "180px"},
        { top: "50%", left: "50%", size: "90px"},
        { top: "30%", left: "40%", size: "130px"},
        { top: "60%", left: "20%", size: "110px"},
        { top: "40%", left: "80%", size: "140px"},
      ]
    };
  },
};

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
    <form action="get">
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-account"></i></span>
      <input type="text" placeholder="Nome Completo" />
      </div>
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-email"></i></span>
      <input type="email" placeholder="Email" />
      </div>
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-lock"></i></span>
      <input type="password" placeholder="Senha" />
      </div>
      <div class="input-field">
        <span class="icon"><i class="mdi mdi-lock"></i></span>
      <input type="password" placeholder="Confirme sua senha" />
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

