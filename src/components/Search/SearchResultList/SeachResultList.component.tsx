import { SearchResult } from "../SearchResult/SearchResult.component";
import "./SearchResultList.scss";
import "../../../App.scss";
import { Product, Result } from "../../../App";

interface SearchResultProps {
  results: Result[];
  handleSearchResults: (trend: Product) => void;
}

export const SearchResultsList = ({
  results,
  handleSearchResults,
}: SearchResultProps) => {
  return (
    <div className="results-list">
      <div className="latest-trend-container">
        <div className="text-bold">Latest Trends</div>

        <div className="trends-images">
          {results.slice(0, 4).map((trend: Product) => (
            <div className="trends-image-container" key={trend.id}>
              <img
                src={trend.image}
                height="200px"
                width="150px"
                alt="Not available"
                onClick={() => handleSearchResults(trend)}
              />
              <span>{trend.category}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="suggestions-container">
        <div className="text-bold mb-20">Popular Suggestion</div>
        {results.map((result: Object, id: number) => {
          return (
            <SearchResult
              result={result}
              key={id}
              handleSearchResults={handleSearchResults}
            />
          );
        })}
      </div>
    </div>
  );
};
