import Dashboards from "../Dashboards";
import Header from "../Header";
import Navbar from "../Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <Header />
      </header>
      <main>
        <div>
          <Navbar />
          {/* Card container to prevent overlap and allow smooth drag */}
          <div
            className="relative bg-blue-100 p-12 flex flex-wrap gap-6 mt-6 px-4 overflow-hidden"
            style={{
              alignItems: "flex-start",
            }}
          >
            <div className="relative m-12 flex-1 min-w-[320px] max-w-[650px]">
              <Dashboards/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
