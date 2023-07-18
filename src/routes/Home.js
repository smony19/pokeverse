import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { PokemonCard } from '../components/PokemonCard';
import { Navigation } from '../components/Navigation';

function Home() {
    const [pokemonList, setPokemonList] = useState([]);
  
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
        .then((res) => res.json())
        .then((data) => {
          setPokemonList(data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
        <div>    
          <Navigation />  
          <Container>      
            <Row className='g-4'>
              {pokemonList.map((pokemon) => (
                <Col key={pokemon.name}>
                  <PokemonCard name={pokemon.name} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
}

export { Home };