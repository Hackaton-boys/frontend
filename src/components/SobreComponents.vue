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

</template>


<style scoped>


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



