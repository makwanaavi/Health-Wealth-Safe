import Dashboards from "../Dashboards";
import Header from "../Header";
import Navbar from "../Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <main>
        <div>
          <div
            className="relative bg-blue-100 flex flex-wrap overflow-hidden"
            style={{
              alignItems: "flex-start",
            }}
          >
            <div className="relative   flex-1 min-w-[320px] max-w-[650px]">
              <Dashboards />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
