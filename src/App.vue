<script>

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
                <input type="text"  placeholder="Pontos de Distribuição:" class="pontos" name="pontosDistribuição">
            </div>
            <div>
              <img src="" alt="">
            </div>
              <div>
                <button type="submit">Confimar reserva</button>
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

div.geral{
    height: 100vh;
    background-color: #215567;
    
}
h1{
  position: relative;
  text-align: center;
  color: white;
  font-size: 5vw;
  z-index: 2;
}
form{
  position: relative;
  text-align: center;
  border: none;
  outline: none;
  z-index: 2;
}
.nome{
  margin: 3vw 0 1vw 0;
    width: 500px;  /* Define a largura do campo */
    height: 40px; /* Define a altura do campo */
    border-radius: 20px;
    padding: 0 0 0 1vw;
    border-color: #052837;
    border-width: 3px ;
}
.endereco{
   margin: 0.3vw 0 1vw 0;
    width: 500px;  /* Define a largura do campo */
    height: 40px; /* Define a altura do campo */
    border-radius: 20px;
    padding: 0 0 0 1vw;
    border-color: #052837;
    border-width: 3px ;
}
.cpf{
   margin: 0.3vw 0 1vw 0;
    width: 500px;  /* Define a largura do campo */
    height: 40px; /* Define a altura do campo */
    border-radius: 20px;
    padding: 0 0 0 1vw;
    border-color: #052837;
    border-width: 3px ;
}
.pontos{
   margin: 0.3vw 0 1vw 0;
    width: 500px;  /* Define a largura do campo */
    height: 40px; /* Define a altura do campo */
    border-radius: 20px;
    padding: 0 0 0 1vw;
    border-color: #052837;
    border-width: 3px ;
}
button{

  margin:3vw 0 0 0;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
   background: rgba(255, 255, 255, 0.2);
}
.bolha1{
      position: absolute;
      width: 350px;
      height: 350px;
      background-image: linear-gradient( 320deg, #215567, #BED6DA);
      border-radius: 50%;
      z-index: 1;
      
}
    .bolha2 {
      position: absolute;
      width: 1px;
      height: 1px;
      background-image: linear-gradient( 320deg, #215567, #BED6DA);
      border-radius: 50%;
       z-index: 1; 
      
    
    }
    .bolha3 {
     position: absolute;
      background-image: linear-gradient( 320deg, #215567, #BED6DA);
      border-radius: 50%;
       z-index: 1; 
      
    }
    .bolha4 {
      position: absolute;
      width: 100px;
      height: 100px;
      background-image: linear-gradient( 320deg, #215567, #BED6DA);
      border-radius: 50%;
      
    }
    .bolha5 {
      position: absolute;
      width: 100px;
      height: 100px;
      background-image: linear-gradient( 320deg, #215567, #BED6DA);
      border-radius: 50%;
      
    }

    /* Exemplos de bolhas em posições diferentes */
    .bolha1 { bottom: -5%; left: -5%; }
    .bolha2 { top: -5%; left: 46%; width: 370px; height: 370px;}
    .bolha3 { top: 70%; left: 70%; width: 200px; height: 200px; }
    .bolha4 { top: 30%; left: 84%; width: 300px; height: 300px; }
    .bolha5 { top: 60%; left: 30%; width: 20px; height: 20px; }

</style>
