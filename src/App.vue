<script setup>
import { ref } from 'vue'
import VistaInicio from './components/VistaInicio.vue'
import VistaBatalla from './components/VistaBatalla.vue'
import VistaGanador from './components/VistaGanador.vue'

const vista = ref('inicio') // 'inicio' | 'batalla' | 'ganador'
const jugador1 = ref(null)
const jugador2 = ref(null)
const ganador = ref(null)

function iniciarBatalla(j1, j2) {
  // TODO
}

function terminarBatalla(g) {
  // TODO
}

function reiniciar() {
  // TODO
}
</script>

<template>
  <VistaInicio v-if="vista === 'inicio'" @iniciar="iniciarBatalla" />
  
  <!-- TODO: VistaBatalla -->
  <!-- TODO: VistaGanador -->
</template>