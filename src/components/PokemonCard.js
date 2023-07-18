import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { FavouritesContext } from '../FavouritesProvider';
import { useContext } from 'react';

function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const {favourites, addFavourite, removeFavourite}  = useContext(FavouritesContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img
        width='286'
        height='286'
        bg='dark'
        variant='top'
        src={pokemon?.sprites.front_default}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text as='div'>
          Abilities:
          <ul>
            {pokemon?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}     
          </ul>
        </Card.Text>
        {favourites.includes(name) ? 
        <Button variant="primary" onClick={() => removeFavourite(name)}>
            Remove from Favourites
        </Button> :
        <Button variant="primary" onClick={() => addFavourite(name)}>
            Add to Favourites
        </Button>
        }
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
