<script setup>
import Primeira from '@/imgs/FrenteEco-removebg-preview.png'
import Segunda from '@/imgs/TrasEco-removebg-preview.png'
</script>

<template>
  <div class="geral">
    <h1>RESERVE AGORA
    </h1>
    <main>
      <form action="" method="">
        <div>
          <label for="nome"></label>
          <input type="text" placeholder="nome:" class="nome" name="nome">
        </div>

        <div>
          <label for="enderenco"></label>
          <input type="text" placeholder="Endereço:" class="endereco" name="endereco">
        </div>

        <div>
          <label for="cpf"></label>
          <input type="text" placeholder=" CPF:" class="cpf" name="cpf">
        </div>

        <div>
          <label for="pontosDistribuicao"></label>
          <input type="text" placeholder="Pontos de Distribuição:" class="pontos" name="pontosDistribuição">
        </div>
        <div class="container">
          <img class="img1" :src="Primeira" alt="Foto 1" />
          <img class="img2" :src="Segunda" alt="Foto 2" />
        </div>
        <div>
          <button type="submit">Confimar reserva</button>
        </div>
        <div class="coment">
          <p><router-link to="/digasuaexperiencia">Faça um Comentario sobre as Ecobags!</router-link></p>
        </div>

      </form>
      <div class="bolha bolha1"></div>
      <div class="bolha bolha2"></div>
      <div class="bolha bolha3"></div>
      <div class="bolha bolha4"></div>
      <div class="bolha bolha5"></div>
    </main>
  </div>


</template>

<style scoped>


.coment a {
  color: rgb(211, 209, 209);
  font-size: 1.1vw;
}

.coment p {
  margin: 1vw 0 2vw 0;
}

div.geral {
  min-height: 100vh;
  background-color: #215567;
  overflow: hidden;
}

h1 {
  margin: 4vw 0 0 0;
  position: relative;
  text-align: center;
  color: white;
  font-size: 5vw;
  z-index: 2;
  font-family: 'Times New Roman', Times, serif;
}

form {
  position: relative;
  text-align: center;
  border: none;
  outline: none;
  z-index: 2;

}

.nome {
  margin: 3vw 0 1vw 0;
  width: 500px;
  height: 40px;
  border-radius: 20px;
  padding: 0 0 0 1vw;
  border-color: #052837;
  border-width: 3px;
}

.endereco {
  margin: 0.3vw 0 1vw 0;
  width: 500px;
  height: 40px;
  border-radius: 20px;
  padding: 0 0 0 1vw;
  border-color: #052837;
  border-width: 3px;
}

.cpf {
  margin: 0.3vw 0 1vw 0;
  width: 500px;
  height: 40px;
  border-radius: 20px;
  padding: 0 0 0 1vw;
  border-color: #052837;
  border-width: 3px;
}

.pontos {
  margin: 0.3vw 0 1vw 0;
  width: 500px;
  height: 40px;
  border-radius: 20px;
  padding: 0 0 0 1vw;
  border-color: #052837;
  border-width: 3px;
}

button {
  margin: 1vw 0 0 0;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.2);
}

img {
  width: 250px;
  height: auto;
  padding: 1vw;
}

.bolha1 {
  position: absolute;
  background-image: linear-gradient(320deg, #215567, #BED6DA);
  border-radius: 50%;
  z-index: 1;
  margin: 25vw 0;
}

.bolha2 {
  position: absolute;
  width: 1px;
  height: 1px;
  background-image: linear-gradient(320deg, #215567, #BED6DA);
  border-radius: 50%;
  z-index: 1;
  margin: 73vw 0;
}

.bolha3 {
  position: absolute;
  background-image: linear-gradient(320deg, #215567, #BED6DA);
  border-radius: 50%;
  z-index: 1;
  margin: 20vw 0;
}

.bolha4 {
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(320deg, #215567, #BED6DA);
  border-radius: 50%;
  margin: 40vw 0
}

.bolha5 {
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(320deg, #215567, #BED6DA);
  border-radius: 50%;
  margin: 75vw 0;
}

/* Exemplos de bolhas em posições diferentes */
.bolha1 {
  top: 53%;
  width: 370px;
  height: 370px;
}

.bolha2 {
  top: -5%;
  left: 46%;
  width: 370px;
  height: 370px;
}

.bolha3 {
  top: 70%;
  left: 50%;
  width: 200px;
  height: 200px;
}

.bolha4 {
  top: 30%;
  left: 70%;
  width: 300px;
  height: 300px;
}

.bolha5 {
  top: 15%;
  left: 20%;
  width: 200px;
  height: 200px;
}


/*celulares////////////////*/

@media(max-width:480px) {
  h1 {

    font-size: 2rem;
    padding: 3vw 0;

  }

  img {
    width: 150px;
    height: auto;
    padding: 1vw;
  }

  .coment a {
    font-size: 1rem;
    color: rgb(211, 209, 209);
  }

  .nome {
    width: 60vw;
    margin: 3vw 0 3vw 0;
  }

  .endereco {
    width: 60vw;
    margin: 0 0 3vw 0;

  }

  .cpf {
    width: 60vw;
    margin: 0 0 3vw 0;

  }

  .pontos {
    width: 60vw;
    margin: 0 0 3vw 0;

  }

  button {
    width: 40vw;
    font-size: 0.7rem;
  }

  div.bolha1 {
    top: 75%;
    width: 120px;
    height: 120px;
  }

  div.bolha2 {
    top: -5%;
    left: 46%;
    width: 150px;
    height: 150px;
  }

  div.bolha3 {
    top: 70%;
    left: 60%;
    width: 100px;
    height: 100px;
  }

  div.bolha4 {
    top: 40%;
    left: 30%;
    width: 110px;
    height: 110px;
  }

  div.bolha5 {
    top: 12%;
    left: 7%;
    width: 80px;
    height: 80px;
  }
}

.bolha1 {

  margin-top: 100vh;

}

.bolha2 {

  margin-top: 110vh;

}

.bolha3 {
  margin-top: 100vh;

}

.bolha4 {
  margin-top: 100vh;

}

.bolha5 {
  margin-top: 100vh;
}
</style>
