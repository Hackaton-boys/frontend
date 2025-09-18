<script setup>
import { ref, onMounted, } from 'vue';
import axios from 'axios';
import { useLoginStore } from '@/stores/usuario'

  const loginStore = useLoginStore()
  const bolhas = [
        { top: '5%', left: '10%', size: '60px', delay: '0s' },
        { top: '15%', left: '70%', size: '80px', delay: '1s' },
        { top: '40%', left: '30%', size: '50px', delay: '2s' },
        { top: '70%', left: '60%', size: '40px', delay: '0.5s' },
        { top: '85%', left: '20%', size: '70px', delay: '1.5s' },
      ];

  const comentarios= ref([]);
  const novoComentario = ref("");

  const carregarComentarios = async () => {
    try {
      const res = await axios.get("http://localhost:8000/comentarios/", {
        headers: {
          Authorization: undefined
        }
      });
      comentarios.value = res.data;
    } catch (error){
      console.log(error.response?.data || error.message)
    }
  };
  const enviarComentario = async() => {
    try {
      if(!loginStore.authenticated){
        alert("Você precisa estar logado para comentar")
      }

      await axios.post("http://localhost:8000/comentarios/", {
        comentario: novoComentario.value
      },
      {
        headers:{
          Authorization: `Token: ${loginStore.token}`
        }
      }
    );

    novoComentario.value = "";

    await carregarComentarios();
    } catch(error){
      console.log(error.response?.data || error.message)
      alert(`Erro ao enviar comentário`)
    }
  };

  onMounted(() => {
    carregarComentarios()
  });
</script>
<template>
  <div class="fundo">
    <!-- Bolhas -->
  <div
      v-for="(bolha, index) in bolhas"
      :key="index"
      class="bolha"
      :style="{
        top: bolha.top,
        left: bolha.left,
        width: bolha.size,
        height: bolha.size,
        animationDelay: bolha.delay
      }"
    >
  </div>
    <h1>DESCREVA SUA EXPERIÊNCIA</h1>
  <ul v-if="comentarios.length">
    <li v-for="c in comentarios" :key="c.id_comentario" class="comentario-item">
      <p><strong>{{ c.usuario }}</strong>:</p> <p>{{ c.comentario }}</p>
      <em>({{ new Date(c.data_hora).toLocaleString() }})</em>
    </li>
  </ul>
  <p v-else> Não há comentários</p>
  <div v-if="loginStore.authenticated" class="comentario-box">
    <textarea v-model="novoComentario"
    placeholder="Digite seu comentário"
    rows="3"></textarea>
    <button @click="enviarComentario">Enviar</button>
  </div>
  <div v-else>
    <p>Faça login para comentar</p>
  </div>
  </div>
</template>
<style scoped>
.fundo {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #215567, #163a49);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

h1 {
  color: white;
  font-family: serif;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
}

.bolha {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 190% 30%, #bdd5d9, #215567);
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.2),
              inset 5px 5px 15px rgba(0, 0, 0, 0.3);
  animation: flutuar 6s ease-in-out infinite alternate;
  z-index: 1;
}

@keyframes flutuar {
  0%   { transform: translateY(0px) translateX(0px); }
  50%  { transform: translateY(-15px) translateX(5px); }
  100% { transform: translateY(0px) translateX(0px); }
}

.comentario-box {
  margin-top: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza todos os <li> */
  padding: 0;
  list-style: none;
  width: 100%;
}

li {
  margin-top: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column; /* muda de linha para coluna */
  align-items: center;    /* centraliza horizontalmente */
  text-align: center;     /* centraliza o texto */
  color: black;
  background-color: white;
  border-radius: 25px;
  padding: 10px 5vw 10px 5vw;
  max-width: 500px;       /* largura máxima para não esticar demais */
}

textarea {
  width: 300px;
  height: 80px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  resize: none;
  font-size: 14px;
}

.avaliacao {
  margin-top: 8px;
}

.estrela {
  font-size: 20px;
  cursor: pointer;
  color: #ccc;
}

.estrela.ativa {
  color: gold;
}

button {
  margin-top: 8px;
  padding: 8px 16px;
  background: #3e8ecf;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #2e6ca3;
}

.comentarios {
  margin-top: 20px;
  width: 320px;
  z-index: 2;
}

.card-comentario {
  background: white;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 12px;
  font-size: 14px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.7);
}
.card-comentario p {
  color: black;
  padding: 0 0 0 1vw;
}

.cabecalho {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
}

.avatar {
  width: 24px;
  height: 24px;
  background: #d0d8dc;
  border-radius: 50%;
  margin-right: 8px;
}

.nome {
  font-size: 12px;
  margin-right: auto;
  color: black;
}

.estrelas .estrela {
  font-size: 14px;
}

.btn-remover {
  background: transparent;
  border: none;
  color: #888;
  font-size: 14px;
  cursor: pointer;
  margin-left: 8px;
}

.btn-remover:hover {
  color: red;
}

/* Responsividade para tablets */
@media (max-width: 768px) {
  h1 {
    font-size: 1.2rem;
    text-align: center;
  }

  textarea {
    width: 250px;
    height: 70px;
    font-size: 13px;
  }

  .comentarios {
    width: 280px;
  }

  .card-comentario {
    font-size: 13px;
    padding: 10px;
  }

  .bolha {
    opacity: 0.7; /* menos destaque em telas menores */
  }
}

/* Responsividade para celulares */
@media (max-width: 480px) {
  .fundo {
    padding-top: 10px;
  }

  h1 {
    font-size: 1rem;
  }

  textarea {
    width: 200px;
    height: 60px;
    font-size: 12px;
  }

  button {
    padding: 6px 12px;
    font-size: 12px;
  }

  .comentarios {
    width: 220px;
  }

  .card-comentario {
    font-size: 12px;
    padding: 8px;
  }

  .avatar {
    width: 20px;
    height: 20px;
  }

  .estrela {
    font-size: 16px;
  }

  .estrelas .estrela {
    font-size: 12px;
  }
}

</style>

