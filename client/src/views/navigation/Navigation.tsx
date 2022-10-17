import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Navigation as NavigationComp } from "components/Navigation/Navigation";

// A custom hook that builds on useLocation to parse
// the query string for you. (from react rouver v5 docs)
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Navigation = (): JSX.Element => {
  const query = useQuery();
  const start = query.get("start");
  const end = query.get("end");
  const avoidances = JSON.parse(query.get("avoidances") || "");

  return (
    <MainWrapper>
      {start && end ? (
        <NavigationComp start={start} end={end} avoidances={avoidances} />
      ) : null}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: #bbb;
  height: 100vh;
  box-sizing: border-box;
`;
