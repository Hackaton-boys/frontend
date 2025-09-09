<script setup>
import { onMounted, nextTick } from 'vue'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"

const pontos = [
  { coords: [-26.457426, -48.598263], nome: 'Escola Adalziza Leonida de Souza Cunha',endereco: 'Av. Amândio Cabral, 1501', foto: '/residencias/residencia1.jpg' },
  { coords: [-26.462792, -48.609324], nome: 'Prefeitura de Balneário Barra do Sul',endereco: 'R. Joaquim João Luiz, 216', foto: '/residencias/residencia2.jpg' }
]

onMounted(async () => {
  await nextTick()

  const map = L.map('map').setView([-23.55052, -46.633308], 5)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  pontos.forEach(ponto => {
    const popupContent = `
      <div style="text-align:center">
        <h3>${ponto.nome}</h3>
        <p>${ponto.endereco}</p>
        <img src="${ponto.foto}" alt="${ponto.nome}" style="width:200px; border-radius:8px; margin-top:-10px; border:2px solid; black" />
      </div>
    `
    L.marker(ponto.coords).addTo(map).bindPopup(popupContent)
  })

  setTimeout(() => {
    map.invalidateSize()
  }, 300)
})
</script>

<template>
  <section class="map-text">
    <h2 class="mid">Pontos de Distribuição</h2>
    <p class="mid">A partir desse mapa, você pode localizar os pontos de distribuição de ecobags</p>
    <div id="map" class="map"></div>
  </section>
</template>

<style scoped>
.map-text {
  background: linear-gradient(to bottom, #2a5858, #0F3C51);
  display: grid;
  place-items: center;
}
h2.mid {
  font-size: 3rem;
  color: white;
  margin-top: 2vw;
}
.mid {
  display: flex;
  justify-content: center;
  font-size: 1.1vw;
  color: rgba(234, 234, 234, 0.734);
  padding: 0.2vw 0;
  margin: 1vh 0;
}
.map {
  border-radius: 10px;
  border: #bdd5d9 4px solid;
  width: 80%;
  height: 600px;
}
@media (max-width: 768px) {
  .map {
    width: 90%;
    height: 300px;
    margin: 3vh 0;
  }
  h2.mid {
    font-size: 1.5rem;
    margin-top: 4vw;
  }
  .mid {
    font-size: 1rem;
    text-align: center;
  }

}
</style>
