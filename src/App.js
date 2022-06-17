import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {
  let users = [
    {
      name: "ermek",
      lastName: "mldbv",
      age: 23,
      id: 1,
    },

    {
      name: "aibek",
      lastName: "mldbv",
      age: 22,
      id: 2,
    },
    {
      name: "maks",
      lastName: "jumaliev",
      age: 29,
      id: 3,
    },
    {
      name: "danai",
      lastName: "danai",
      age: 28,
      id: 4,
    },
  ];

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
