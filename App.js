import Connected from "./pages/Connected";
import Login from "./pages/Login";

const pageType = {
  LOGIN: 0,
  CONNECTED: 1,
};

export default function App() {
  return <Connected />;
  //return <Login />;
}
