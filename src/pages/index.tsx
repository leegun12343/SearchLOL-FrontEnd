// src/pages/index.tsx

import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import HomeHeader from "components/Home/HomeHeader";

const queryClient = new QueryClient();

const HomePage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeHeader />
    </QueryClientProvider>
  );
};

export default HomePage;
