import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { FavouritesContext } from '../FavouritesProvider';
import { useContext } from 'react';
import { PokemonCard } from '../components/PokemonCard';
import { Navigation } from '../components/Navigation';

function Favourites({ name }) {
  const { favourites }  = useContext(FavouritesContext);

  return (
    <div>
    <Navigation />  
    <Container>
      <Row className='g-4'>
        {favourites.map((name) => (
          <Col key={name}>
            <PokemonCard name={name} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );

}

export { Favourites };
