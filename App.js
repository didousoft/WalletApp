import Connected from "./pages/Connected/Connected";
import Login from "./pages/Login/Login";

const pageType = {
  LOGIN: 0,
  CONNECTED: 1,
};

export default function App() {
  return <Connected />;
  //return <Login />;
}
