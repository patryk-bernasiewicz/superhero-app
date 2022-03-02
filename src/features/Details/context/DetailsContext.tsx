import { AppContext } from '@context/AppContext';
import { Superhero } from '@interfaces/superhero.interface';
import {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface DetailsState {
  areDetailsLoading: boolean;
  superhero?: Superhero;
  fetchDetails: (slug: string) => Promise<Superhero | undefined>;
}

export const detailsInitialState: DetailsState = {
  areDetailsLoading: true,
  superhero: undefined,
  fetchDetails: () => Promise.resolve(undefined),
};

export const DetailsContext = createContext<DetailsState>(detailsInitialState);

export const DetailsProvider: FC = ({ children }) => {
  const delayTimer = useRef<ReturnType<typeof setTimeout>>();
  const { areHeroesFetched, superheroes } = useContext(AppContext);
  const [areDetailsLoading, setDetailsLoading] = useState(true);
  const [superhero, setSuperhero] = useState<Superhero | undefined>();

  const clearTimer = () => {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
    }
  };

  const fetchDetails = (slug: string) =>
    new Promise<Superhero | undefined>((resolve, reject) => {
      clearTimer();
      setDetailsLoading(true);

      // repeat "fetch" if superheroes are not loaded - fake timeout
      let tries = 0;
      if (!areHeroesFetched) {
        if (tries > 3) {
          throw new Error('Could not fetch hero details.');
        }
        tries++;
        setTimeout(() => fetchDetails(slug), 500);
      }

      // fake delay
      // TODO: replace with real fetch call when backend is ready
      delayTimer.current = setTimeout(() => {
        if (!superheroes?.length) {
          return;
        }

        const foundHero = superheroes.find(
          (superhero) => superhero.slug === slug
        );
        setSuperhero(foundHero);
        setDetailsLoading(false);
        if (foundHero) {
          resolve(foundHero);
        }

        reject();
      }, 500);
    });

  useEffect(() => clearTimer);

  return (
    <DetailsContext.Provider
      value={{
        areDetailsLoading,
        superhero,
        fetchDetails,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};
