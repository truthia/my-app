import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/my-app" element={<Quotes />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
