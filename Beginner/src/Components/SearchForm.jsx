import InputWithLabel from "./InputWithLabel";
const SearchForm = ({ searchTerm, handleSearchSubmit, handleSearchInput }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <InputWithLabel
        onInputChange={handleSearchInput}
        value={searchTerm}
        isFocused
        id="search"
        label="Search"
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button type="submit" disabled={!searchTerm}>
        Submit API
      </button>
    </form>
  );
};
export default SearchForm
