const URL = 'https://pokeapi.co/api/v2/pokemon'

export async function obtenerPokemon(idONombre) {
  const res = await fetch(`${URL}/${idONombre}`)
  const data = await res.json()
  return {
    id: data.id,
    nombre: data.name,
    tipos: data.types.map(t => t.type.name),
    sprite: data.sprites.front_default,
    spriteEspalda: data.sprites.back_default,
    artwork: data.sprites.other['official-artwork'].front_default,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    velocidad: data.stats[5].base_stat,
    vidaActual: data.stats[0].base_stat
  }
}