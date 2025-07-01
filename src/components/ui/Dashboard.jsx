import FeelingChart from "../FeelingChart";
import Header from "../Header";
import Navbar from "../Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <Header />
      </header>
      <main>
        <div>
          <Navbar />
          {/* Card container to prevent overlap and allow smooth drag */}
          <div
            className="relative flex flex-wrap   gap-6 mt-6 px-4"
            style={{ minHeight: 400, alignItems: "flex-start" }}
          >
            <div className="relative flex-1 min-w-[320px] max-w-[650px]">
              <FeelingChart />
            </div>
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

