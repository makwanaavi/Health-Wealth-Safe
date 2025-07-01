import Header from "../Header";
import Navbar from "../Navbar";

const Dashboard = () => {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
       <Header/>
      </header>
      <main>
        <div>
          <Navbar/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;