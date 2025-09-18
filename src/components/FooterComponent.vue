<script setup>
import Logo from '@/imgs/Logo.png'


</script>

<template>
    <footer>
        <div class="logo">
            <img :src="Logo" alt="Logo">
        </div>
        <div class="texto">
            <h2>Maré Verde</h2>
            <p>
                <span class="material-symbols-outlined">call</span>
                (47) 4002-8922
            </p>
            <a href="https://www.instagram.com/mareverde.hackathon2025/">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
        <div class="final">
            <p>© 2025 - Alguns Direitos Reservados.</p>
        </div>
    </footer>
</template>

<style scoped>
footer{
    background-color: #215567;
}
.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
img{
    width: 80px;
    justify-content: center;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-size: 24px;
  color: white;
  display: inline-block;
  line-height: 1;
}

.texto{
    text-align: center;
    color: white;
    padding-bottom: 15px;
}
.texto h2{
    font-size: 2.3vw;
    margin-bottom: 10px;
    font-weight: bold;
}
.texto p {
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 8px; 
  font-size: 1.2vw; 
}
.texto .fa-instagram {
  font-size: 1.9vw;
  color: white;
  padding-top: 10px;
}
.final{
    color: white;
    display: flex;
    justify-content: center;
    font-size: 1.2vw;
    padding-bottom: 1vw;
}


@media (max-width: 600px) {
    .texto h2{
        font-size: 6vw;
    }
    .texto p {
        font-size: 4vw; 
    }
    .texto .fa-instagram {
        font-size: 6vw;
    }
    .final{
        font-size: 3.5vw;
    }
}
</style>
