import { LiveReload, Outlet, Links } from "remix";
import type { LinksFunction } from "remix";
import tailwindStyles from "~/styles/tailwind.css";
// import tailwindStyles from "./styles/tailwind.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix So great🤣 , it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
