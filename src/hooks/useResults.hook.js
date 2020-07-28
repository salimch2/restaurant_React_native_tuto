import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  const SearchApi = async (asterm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: asterm,
          location: "Morocco",
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      setErr("Somthing went wrong");
    }
  };

  useEffect(() => {
    SearchApi("pasta");
  }, []);

  return [SearchApi, results, err];
};
