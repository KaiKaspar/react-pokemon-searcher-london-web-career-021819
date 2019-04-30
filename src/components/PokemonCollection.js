import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({ pokemon}) => (
  <Card.Group style={{margin: '10px'}} itemsPerRow={6}>
    {pokemon.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </Card.Group>
)

export default PokemonCollection
