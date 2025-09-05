    <template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Oranienbaum&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
      <div class="pagina">
        <header>
          <nav>
            <video autoplay muted loop playsinline class="video-bg">
              <source :src="videoUrl" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
            <div class="header-content">
              <img :src="logo" alt="Logo" class="logo">

              <div class="menu-hamburguer">
              <div class="barra1"></div>
              <div class="barra2"></div>
              <div class="barra3"></div>
              </div>
              <ul>
                <li><a href="#">Cadastre-se</a></li>
                <li><a href="#">Mapa</a></li>
                <li><a href="#">Reservar</a></li>
                <li><a href="#">Sobre Nós</a></li>
              </ul>
            </div>
          </nav>

          <div class="meio">
            <div class="vidro">
              <h1 class="do">SEJA A MARÉ<br> DA <br>MUDANÇA</h1>
            </div>
          </div>
        </header>

        <main>

        </main>
      </div>
    </template>

<script setup>
import videoUrl from '@/assets/videoteste.mp4'
import logo from '@/imgs/MARE VERDE.png'
</script>

<style scoped>
/* Header com vídeo de fundo */
header {
  position: relative;
  width: 100%;
  height: 100vh;
  /* Altura do header */
  overflow: hidden;
}

img.logo {
  height: 10vh;
  margin-left: 4vw;
  margin-top: 2vw;
}

/* Vídeo ocupa todo o espaço do header */
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* cobre todo o espaço sem distorcer */
  z-index: -1;
  /* atrás do conteúdo */
}

/* Conteúdo do header centralizado, acima do vídeo */
.header-content {
  display: flex;
  /* ativa flexbox */
  justify-content: space-between;
  /* distância entre bandeira e menu */
  align-items: center;
  /* centraliza verticalmente */
  height: 100%;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  padding: 1rem;
}

.header-content ul {
  display: flex;
  gap: 2vw;
  margin-top: 1vw;
  /* remove margem padrão da ul */
  padding: 0;
  /* remove padding padrão */
  list-style: none;
  /* opcional: remove marcadores */
  margin-right: 4vw;
  font-size: 1.2vw;
  font-style: bold;
}

/*conteudo ficar no meio da pagina*/
.meio {
  position: absolute;
  /* fixa em relação ao header */
  color: black;
  top: 80%;
  /* metade da altura do header */
  left: 50%;
  /* metade da largura */
  transform: translate(-50%, -50%);
  /* centraliza perfeitamente */
}

.do {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  line-height: 1.1;
  text-align: center;
  margin: 0;
  display: block;
  /* remove o flex que estava antes */
}

.conteudo {
  background-color: white;
  color: #333;
}

.vidro {
  padding: 40px 60px;
  background: rgba(255, 255, 255, 0.12);
  /* transparência mais suave */
  backdrop-filter: blur(2px);
  /* efeito de vidro */
  -webkit-backdrop-filter: blur(12px);
  /* Safari */
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  text-align: center;
}
/*//////////////////responsividade//////////////////*/


    .menu-hamburguer div {
      width: 32px;
      height: 2px;
      background-color: #fff;

      margin: 8px;
    }
    .menu-hamburguer{
    cursor: pointer;
    display: none;
    }
@media (max-width: 748px) {

  .pagina{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-color:rgb(255, 255, 255);
    opacity: 20%;



  }
  .header-content ul {
    display: none;

  }
  .menu-hamburguer{
    display: block;
    margin-top: 2vw;

  }
  img.logo {
    height: 8vh;

  }
  .do {

  }
  .meio{
    display: none;
  }
}

</style>
