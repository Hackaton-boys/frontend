<script setup>


const integrantes = [
  { nome: 'Davi Dos Passos', funcao: 'Des. Frontend' },
  { nome: 'Gianluca Gadotti', funcao: 'Des. Backend' },
  { nome: 'Gustavo Alves', funcao: 'Designer UI/UX' },
  { nome: 'João P> Bachamann', funcao: 'Gerente de Projeto' },
  { nome: 'José Neto', funcao: 'Anal. de Qualidade' },
  { nome: 'Luiz Roberto', funcao: 'Espec. em Marketing' },
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

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.</p>
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



