<script setup>


const integrantes = [
  { nome: 'Davi Dos Passos', funcao: 'Designer' },
  { nome: 'Gianluca Gadotti', funcao: 'Des. Frontend' },
  { nome: 'Gustavo Alves', funcao: 'Des. Frontend' },
  { nome: 'João P> Bachamann', funcao: 'Des. Backend' },
  { nome: 'José Neto', funcao: 'Des. Backend' },
  { nome: 'Luiz Roberto', funcao: 'Designer' },
];




</script>
<template>




    <div class="sobre">


    <h1>SOBRE NOS</h1>


    <ul class="integrante">
    <li v-for="integrante in integrantes" :key="integrante.nome">
      <img src="" alt="imagem">
      <h2>{{ integrante.nome }}</h2>
      <p>{{ integrante.funcao }}</p>
    </li>
  </ul>


     <div class="nosso">
      <h2>NOSSO OBJETIVO</h2>

      <p>Nosso objetivo conscientizar as pessoas sobre a importância da responsabilidade dos resíduos, e busca oferecer formas de realizar de descartar esses resíduos de forma que não afete o meio ambiente. E gerar mais força para o projeto ja existente em Balneário Barra do Sul</p>
     </div>


 </div>


<!--teste-->


</template>


<style scoped>
/*teste*/
.dashboard {
  background: #1e4f5c;
  width: 700px;
  height: 350px;
  border-radius: 6px;
  padding: 10px;
  color: white;
  font-family: sans-serif;
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #2d6f7f;
  padding: 8px 15px;
  border-radius: 12px;
}

.avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #a3cfd6;
}

.username {
  background: #a3cfd6;
  color: black;
  padding: 5px 15px;
  border-radius: 10px;
}

.conteudo {
  display: flex;
  margin-top: 15px;
  height: calc(100% - 60px);
}

.sidebar {
  width: 150px;
  border-right: 1px solid #a3cfd6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  background: #2d6f7f;
  color: white;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background: #3c8c9f;
}

.sair {
  margin-top: auto;
  background: #5a7d83;
}

.main {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
}

.card {
  background: #a3cfd6;
  height: 40px;
  border-radius: 8px;
}

/* círculo de fundo */
.main::before {
  content: "";
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #a3cfd6, #1e4f5c);
  z-index: 0;
}

.card {
  position: relative;
  z-index: 1;
}
/*fim do teste*/

h1{


  font-family: 'Ade', serif;
  background-color: #8EAFB7;
  color: white;
  font-size: 3.5rem;
  display: inline-block;
  padding: 2vw 8vw;
  margin-bottom: 5vw;
  border-bottom-left-radius: 8vw;
  border-bottom-right-radius: 8vw;


}


div.sobre{
  text-align: center;


   height: auto;
  background-color: #215567;
}
ul.integrante {
  display: flex;
  flex-wrap: wrap;



  margin: 0 auto;
  width: 60%;
}


ul.integrante li {
  width: 30%;
  padding: 1rem 0;
  list-style: none;
  color: #D7D7D7;
}
ul.integrante li img {
  width: 100%;
  height: auto;
  border: 5px solid #8EAFB7;
}
div.nosso{
  background-color: #8EAFB7;
  display: inline-block;
  width: 60%;
  border-radius: 4vw;
  margin-top: 2vw;
  margin-bottom: 5vw;



}
div.nosso h2{
  background-color: #215567;
  color: white;
  font-size: 2.5rem;


  margin: 0.7vw;
  padding: 1vw 0;
  border-top-left-radius: 3.3vw;
  border-top-right-radius: 3.3vw;

}
div.nosso p{

  padding: 2vw 4vw;
  font-size: 1.5rem;
  color: #215567;
  text-align: justify;
  font-family: 'Ade', serif;


}
@media (max-width: 768px) {
  ul.integrante {
    width: 100%;
  }
  ul.integrante li {
    width: 45%;
    padding: 1rem 0;
  }
  div.nosso {
    width: 90%;

  }
  h1 {
    font-size: 2.5rem;
    padding: 1.5vw 0;

}
  div.nosso h2 {
    font-size: 2rem;
  }
  div.nosso p {
    font-size: 1.2rem;


  text-align: left;
  text-justify: inter-word; /* melhora um pouco a distribuição */
  word-break: break-word;
  }
}
</style>



