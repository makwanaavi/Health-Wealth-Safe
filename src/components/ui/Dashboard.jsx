import Header from "../Header";
import Navbar from "../Navbar";

const Dashboard = () => {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
       <Header/>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Navbar/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;