import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.component";
import { SearchBar } from "./components/Search/SearchBar/SearchBar.component";
import { SearchResultsList } from "./components/Search/SearchResultList/SeachResultList.component";
import "./components/Search/search.scss";
import "./components/Sidebar/sidebar.scss";
import "./App.scss";
import Products from "./components/Products/Products.component";

export interface Result {
  [key: string]: any;
}

export interface Product {
  [key: string]: any;
}

function App() {
  const [filters, setFilters] = useState({
    selectedCategory: "All",
    priceRange: "All",
    rating: "",
  });

  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [error, setError] = useState("");

  const lastCategory = useRef<string | number>("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchResults = (result: Result) => {
    // TODO: handle search results

    const searchedResult = products?.filter(
      (p) => p.category === result.category
    );
    lastCategory.current = result.category;
    setShowProducts(true);
    setShowSearchResults((prev: boolean) => !prev);
    setResult(searchedResult);
  };

  const handleSearch = (value: string) => {
    if (value) {
      const filteredProductsData = products?.filter((item: any) =>
        item.category.includes(value)
      );
      setSearchResults(filteredProductsData);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
      setShowProducts(false);
      setSearchResults([]);
    }
  };

  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setResult(data);
    } catch (error) {
      setError(`Error fetching data: ${error}`);
    }
  }

  const handleChange = (name: string, value: string) => {
    let filteredProducts = searchResults.filter(
      (p) => p.category === lastCategory.current
    );

    if (value !== "All") {
      // Filtering by selected category
      if (name === "selectedCategory") {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.category === value
        );
      }

      // Filtering by price range
      else if (name === "priceRange") {
        if (value === "under100") {
          filteredProducts = filteredProducts.filter(
            (product: Product) => product.price <= 100
          );
        } else if (value === "100to500") {
          filteredProducts = filteredProducts.filter(
            (product: Product) => product.price > 100 && product.price <= 500
          );
        } else if (value === "above500") {
          filteredProducts = filteredProducts.filter(
            (product: Product) => product.price > 500 && product.price < 1100
          );
        }
      }

      // filter by rating
      else if (name === "rating") {
        if (value === "5 star") {
          filteredProducts = filteredProducts.filter(
            (product: Product) =>
              Math.round(product.rating.rate) <= 5 &&
              Math.round(product.rating.rate) > 4
          );
        } else if (value === "4 star") {
          filteredProducts = filteredProducts.filter(
            (product: Product) =>
              Math.round(product.rating.rate) <= 4 &&
              Math.round(product.rating.rate) > 3
          );
        } else if (value === "3 star") {
          filteredProducts = filteredProducts.filter(
            (product: Product) =>
              Math.round(product.rating.rate) <= 3 &&
              Math.round(product.rating.rate) > 2
          );
        } else if (value === "2 star") {
          filteredProducts = filteredProducts.filter(
            (product: Product) =>
              Math.round(product.rating.rate) <= 2 &&
              Math.round(product.rating.rate) > 1
          );
        } else if (value === "1 star") {
          filteredProducts = filteredProducts.filter(
            (product: Product) =>
              Math.round(product.rating.rate) <= 1 &&
              Math.round(product.rating.rate) > 0
          );
        }
      }
    }

    setFilters((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    setResult(filteredProducts);
  };

  return (
    <div className={showProducts ? "App" : "App App-bg "}>
      <div className="components-container">
        <div className="sidebar-top-container">
          {showProducts ? (
            <>
              <span className="text-bold mb-10">Search Results</span>
              <Sidebar filters={filters} handleChange={handleChange} />
            </>
          ) : null}
        </div>

        <div className="contents-container">
          <div className="search-bar-container">
            <SearchBar handleSearch={handleSearch} />

            {showSearchResults && searchResults && searchResults.length > 0 && (
              <SearchResultsList
                results={searchResults}
                handleSearchResults={handleSearchResults}
              />
            )}
          </div>

          {showProducts ? <Products filteredProducts={result} /> : null}
        </div>
      </div>
      {error ? <div>{error}</div> : null}
    </div>
  );
}

export default App;
