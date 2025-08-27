<script setup>


const integrantes = [
  { nome: 'Davi Dos Passos', funcao: 'Desenvolvedor Frontend' },
  { nome: 'Gianluca Gadotti', funcao: 'Desenvolvedor Backend' },
  { nome: 'Gustavo Alves', funcao: 'Designer UI/UX' },
  { nome: 'João P> Bachamann', funcao: 'Gerente de Projeto' },
  { nome: 'José Neto', funcao: 'Anal. de Qualidade' },
  { nome: 'Luiz Roberto', funcao: 'Especialista em Marketing' },
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

  margin: 0;
  height: 100vh;
  background-color: #215567;
}
ul.integrante {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  margin: 0 auto;
  width: 60%;
}


ul.integrante li {
  width: 16.021vw;
  padding: 1rem;
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
  color: white;
  font-size: 2.5rem;
  display: inline-block;
  padding: 1vw 4vw;
  margin-top: 5vw;
  border-top-left-radius: 4vw;
  border-top-right-radius: 4vw;

}

</style>



