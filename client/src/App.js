import "./App.css";
import React from "react";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { StoreProvider } from "./utils/GlobalState";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import MainContainer from "./components/MainContainer";
import "bootstrap/dist/css/bootstrap.min.css";
// import { StyleSheet, View } from "react-native";

// const App = () =>
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
// get the authentication token from local storage if it exists
// const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
export default function App() {
  return (
    // <ApolloProvider client={client}>
    //   <Router>
    //     <>
    //       <StoreProvider>
    <MainContainer />
    //       </StoreProvider>
    //     </>
    //   </Router>
    // </ApolloProvider>
  );
}
