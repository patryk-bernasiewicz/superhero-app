import { MININUM_SEARCH_CHARACTERS } from './constants';

const messages = {
  backendError:
    'Could not connect to the database. Please try again later. (did you remember to run `yarn json-server`?)',
  minCharactersToSearch: `Type at least ${MININUM_SEARCH_CHARACTERS} characters to search.`,
  checkOutRandomHeroes: 'Check out these randomly selected superheroes!',
};

export default messages;
