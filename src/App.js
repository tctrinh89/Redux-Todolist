import { Routes, Route } from "react-router-dom";

import { pulicRoutes } from "./routes";
import { DefaultLayout } from "./component/Layout";
import { Fragment, useEffect } from "react";
import { setupServer } from "./fakeApi";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./stores/features/todoSlice";
if (process.env.NODE_ENV === "development") {
  setupServer();
}
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
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
