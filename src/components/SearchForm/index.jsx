import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ setMovieSearch }) => {
  const [search, setSearch] = useSearchParams();
  const query = search.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ query: query.trim() });
    setMovieSearch(query);
  };

  const handleChange = ({ target: { value } }) => {
    setSearch(value.trim() ? { query: value } : {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Search Movie</span>
        <input
          onChange={handleChange}
          type="text"
          name="movie"
          autoFocus
          value={query}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
