<script>
export default {
  name: "LoginPage",
  data() {
    return {
      bolhas: [
        { top: "10%", left: "5%", size: "150px" },
        { top: "20%", left: "70%", size: "120px" },
        { top: "60%", left: "80%", size: "200px" },
        { top: "75%", left: "15%", size: "100px" },
        { top: "40%", left: "40%", size: "180px" }
      ]
    };
  }
};
</script>

<template>
  <div class="login-page">
    <!-- Bolhas decorativas -->
    <div
      v-for="(bolha, index) in bolhas"
      :key="index"
      class="bolha"
      :style="{ top: bolha.top, left: bolha.left, width: bolha.size, height: bolha.size }"
    ></div>

    <!-- Formulário central -->
    <div class="login-box">
      <h2>LOGIN</h2>

      <form class="form">
        <div class="input-group">
          <span class="icon"><i class="mdi mdi-email"></i></span>
          <input type="email" placeholder="Email" />
        </div>

        <div class="input-group">
          <span class="icon"><i class="mdi mdi-lock"></i></span>
          <input type="password" placeholder="Senha" />
        </div>

        <p class="cadastro">Cadastre-se</p>

        <button type="submit" class="btn-login">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Tela cheia */
.login-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #215567, #163a49);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Bolhas decorativas */
.bolha {
  position: absolute;
  border-radius: 50%;
  opacity: 0.8;

  /* Degradê esférico estilo reflexo */
  background: radial-gradient(circle at 190% 30%, #bdd5d9, #215567);

  animation: flutuar 6s ease-in-out infinite alternate;
}

@keyframes flutuar {
  from { transform: translateY(0) scale(1); }
  to { transform: translateY(-30px) scale(1.05); }
}

/* Card de login */
.login-box {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

.login-box h2 {
  font-size: 3rem;
  font-family: 'Times New Roman', serif;
  margin-bottom: 30px;
}

/* Inputs */
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  position: relative;
}

.input-group .icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #163a49;
}

.input-group input {
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 1rem;
}

/* Texto de cadastro */
.cadastro {
  margin: 10px 0;
  font-size: 0.9rem;
  cursor: pointer;
  opacity: 0.9;
}

/* Botão */
.btn-login {
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.btn-login:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
<!-- Adicionei animação de flutuação nas bolhas e um efeito de blur no fundo do card de login para um visual mais moderno -->
<!-- Usei ícones da Material Design Icons (mdi) para os inputs -->
<!-- Certifique-se de incluir a biblioteca de ícones no seu projeto -->
<!-- Exemplo de inclusão via CDN no index.html: -->
<!-- <link href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css" rel="stylesheet"> -->
