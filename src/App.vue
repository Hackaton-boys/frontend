<script setup>

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
                <button type="submit">Confimar reserva</button>
            </div>
    </form>
    
  </main>
</div>
</template>

<style scoped>

div.geral{
    height: 100vh;
    background: linear-gradient(to bottom, #052837, #80A8BE);
    
}
h1{
  text-align: center;
  color: white;
  font-size: 5vw;
}
form{
  text-align: center;
  border: none;
  outline: none;
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
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

</style>
