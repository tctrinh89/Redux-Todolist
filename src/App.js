import { Routes, Route } from "react-router-dom";

import { pulicRoutes } from "./routes";
import { DefaultLayout } from "./component/Layout";
import { Fragment } from "react";
function App() {
  return (
    <div>
      <Routes>
        {pulicRoutes.map((route, index) => {
          const Layout = route.layout
            ? route.layout
            : route.layout === null
            ? Fragment
            : DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
