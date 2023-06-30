import React from "react";
import Head from "next/head";
import TodoList from "./todo"; 
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Wealthup</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <TodoList />
    </React.Fragment>
  );
}

export default MyApp;
