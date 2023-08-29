import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
const HomePage = lazy(() => import("./pages/home/HomePage"));
const TodoPage = lazy(() => import("./pages/todo/TodoPage"));

// Mobx
import UserStore from "./store/userStore";

function App() {
  const store = new UserStore();

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <section className="flex justify-center items-center">
              Loading...
            </section>
          }
        >
          <Routes>
            <Route element={<HomePage store={store} />} path="/" />
            <Route element={<TodoPage />} path="/todo" />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
