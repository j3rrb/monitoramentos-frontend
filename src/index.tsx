import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ListPage } from "./components";
import { MainContextProvider } from "./contexts/main";
import ResponsiveDrawer from "./components/Drawer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <ListPage
        dbKey="events"
        title="Eventos"
        showAdd
        showFilter
        onAdd={() => console.log("onaddevent")}
      />
    ),
    index: true,
  },
  {
    path: "/regras",
    Component: () => (
      <ListPage
        dbKey="rules"
        title="Regras"
        showAdd
        showFilter
        onAdd={() => console.log("onaddrule")}
      />
    ),
  },
  {
    path: "/envios",
    Component: () => <ListPage dbKey="sent_events" title="Envios" showFilter />,
  },
]);

root.render(
  <React.StrictMode>
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </React.StrictMode>
);
