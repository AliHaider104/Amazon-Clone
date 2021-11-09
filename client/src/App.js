import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Homescreen from "./screens/homescreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="my-3">
          <h1>Ecommerce Website</h1>
          <Homescreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
