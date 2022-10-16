import React from "react";
import { useLocation } from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you. (from react rouver v5 docs)
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Navigation = (): JSX.Element => {
  let query = useQuery();
  console.log(query.get("start"), query.get("end"), query.get("avoidances"));
  return <h1>Navigation</h1>;
};
