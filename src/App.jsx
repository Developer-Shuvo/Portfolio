import Hero from "./assets/Components/Hero/Hero";
import Navbar from "./assets/Components/Navbar/Navbar";

function App() {
  return (
    <div className="relative overflow-x-hidden text-stone-300 antialiased min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        {/* MY other content here */}
        {/* Hero Section */}
        <Hero/>
      </div>
    </div>
  );
}

export default App;
