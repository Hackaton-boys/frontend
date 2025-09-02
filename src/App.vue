<script setup>

</script>
<template>
  <div class="cadastro-page">
    <!-- Bolhas decorativas -->
    <div class="bolha bolha-esquerda"></div>
    <div class="bolha bolha-direita"></div>

    <!-- Card central -->
    <div class="cadastro-box">
        <h2>CADASTRE UM<br />PONTO DE<br />DISTRIBUIÇÃO</h2>

        <form class="form">
          <input type="text" placeholder="Rua :" />
          <input type="text" placeholder="Número :" />
          <input type="text" placeholder="Cep :" />
          <input type="text" placeholder="Latitude :" />
          <input type="text" placeholder="Longitude :" />
          <br class="espaco">
        <button type="submit" class="btn-cadastrar">Cadastrar</button>
        <button type="button" class="btn-cancelar">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadastroPage",
};
</script>

<style scoped>
/* Tela */
.cadastro-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, #295c6d, #163a49);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

/* Bolhas */
.bolha {
  position: absolute;
  border-radius: 50%;
 
}

.bolha-esquerda {
  width: 700px;
  height: 700px;
  bottom: -200px;
  left: -140px;
  background: radial-gradient(circle at 190% 30%, #bdd5d9, #215567);
  animation: flutuar 10s ease-in-out infinite alternate;
}

.bolha-direita {
  width: 1000px;
  height: 1000px;
  top: -50px;
  right: -400px;
  background: radial-gradient(circle at 30% 190%, #bdd5d9, #215567);
  animation: flutuar 10s ease-in-out infinite alternate;
}

@keyframes flutuar {
  from { transform: translateY(0); }
  to { transform: translateY(-30px); }
}

/* Box de cadastro */
.cadastro-box {
  position: relative;
  text-align: center;
  color: white;
  z-index: 2;
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

.cadastro-box h2 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 60px;
  line-height: 1.4;
  font-family: 'Times New Roman', serif;
}

/* Inputs */

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form input {
  width: 370px;
  padding: 10px;
  border-color: #8EAFB7;
  border-radius: 20px;
  outline: none;
  font-size: 1rem;
  margin-left: 1vw;
}

/* Botões */
.btn-cadastrar,
.btn-cancelar {
  width: 180px;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  margin: 5px auto;
  transition: 0.3s;
  border: 1px solid white;
  background: transparent;
  color: white;
}

.btn-cadastrar:hover {
  background: rgba(255, 255, 255, 0.2);
}

.btn-cancelar {
  border-color: white;
  color: #F5A1A1;

}

.btn-cancelar:hover {
  background: rgba(255, 255, 255, 0.1);
}

/*=================================
=========== Celulares =============
=================================*/

@media (max-width: 480px) {
  .cadastro-box{
    padding: 25px 15px;
    width: 300px;
    border-radius: 15px;
  }
  .cadastro-box h2 {
    font-size: 1.5rem;
    margin-bottom:20vw; 
  }
  .form {
    gap: 20px;
  }
  .form input{
    font-size: 0.8rem;
    padding: 7px 7px 7px 32px;
    width: 260px ;
  }
  .btn-cadastrar,
  .btn-cancelar {
    font-size: 0.8rem;
    padding: 7px ;
    margin-bottom: 10px;
  }
  .espaco {
    margin-bottom: 50px;
  }
}
</style>

