import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";


function App() {
  return (
    <div className="min-h-screen bg-light text-dark flex flex-col">
      <Navbar />
      <main className="flex-1">
<Home />
      </main>
    <Footer />
    
    </div>
  );
}

export default App;
