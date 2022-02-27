import { useContext } from 'react';

import { SuperheroContext } from '@context/SuperheroContext/SuperheroContext';

const RandomHeroes = () => {
  const { areHeroesLoading, randomSuperheroes } = useContext(SuperheroContext);

  if (areHeroesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {randomSuperheroes.map((superhero) => (
        <li key={superhero.id}>{superhero.name}</li>
      ))}
    </ul>
  );
};

export default RandomHeroes;
