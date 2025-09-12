<script setup>
import videoUrl from '@/assets/videoteste.mp4'
import logo from '@/imgs/MARE VERDE.png'
</script>

<template>
  <div class="pagina">
    <header>
      <nav>
        <video autoplay muted loop playsinline class="video-bg">
          <source :src="videoUrl" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <div class="header-content">
          <img :src="logo" alt="Logo" class="logo">
          <ul>
            <!-- agora usamos <router-link> -->
            <li><router-link to="/login">Faça Login</router-link></li>
            <li><router-link to="/maps">Mapa</router-link></li>
            <li><router-link to="/reservas">Reservar</router-link></li>
            <li><router-link to="/sobre">Sobre Nós</router-link></li>
          </ul>
        </div>
      </nav>

      <div class="meio">
        <div class="vidro">
          <h1 class="do">SEJA A MARÉ<br> DA <br>MUDANÇA</h1>
        </div>
      </div>
    </header>

    <!-- aqui renderizam as rotas -->
    <router-view />
  </div>
</template>

<style scoped>
/* todo o seu CSS original mantido */
header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

img.logo {
  height: 10vh;
  margin-left: 4vw;
  margin-top: 2vw;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  padding: 1rem;
}

.header-content ul {
  display: flex;
  gap: 2vw;
  margin-top: 1vw;
  padding: 0;
  list-style: none;
  margin-right: 4vw;
  font-size: 1.2vw;
  font-style: bold;
}

.meio {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}

.do {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-style: normal;
  line-height: 1.1;
  text-align: center;
  margin: 0;
}

.vidro {
  padding: 40px 60px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  text-align: center;
}
</style>
