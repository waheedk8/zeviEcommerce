import { Product } from "../../../App";
import "./SearchResult.scss";

interface SearchResultProps {
  result: any;
  handleSearchResults: (value: Product) => void;
}

export const SearchResult = ({
  result,
  handleSearchResults,
}: SearchResultProps) => {
  return (
    <div
      className="search-results-container"
      onClick={() => handleSearchResults(result)}
    >
      <span>{result.title}</span>
      <img src={result.image} height="20px" width="20px" alt="Not available" />
    </div>
  );
};
