import { SuperheroContext } from '@context/SuperheroContext';
import { useContext } from 'react';

const RandomHeroes = () => {
  const { randomHeroesSelection } = useContext(SuperheroContext);

  return (
    <ul>
      {randomHeroesSelection?.map((hero) => (
        <li key={hero.id}>{hero.name}</li>
      ))}
    </ul>
  );
};

export default RandomHeroes;
