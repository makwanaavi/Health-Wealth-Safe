import { Rnd } from "react-rnd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { date: "2025-06-27", score: 7 },
  { date: "2025-06-28", score: 6 },
  { date: "2025-06-29", score: 5 },
  { date: "2025-06-30", score: 4.5 },
  { date: "2025-07-01", score: 4 },
];

const Dashboards = () => {
  return (
    <div style={{ minHeight: 1200 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 1000,
            height: 550,
          }}
          dragHandleClassName="drag-header"
          className="rounded-lg shadow-md bg-white border border-gray-200"
          dragAxis="both"
          style={{ zIndex: 10 }}
          disableDragging={false}
        >
          <div className="h-full  w-full p-4 overflow-hidden">
            {/* Header - draggable */}
            <div className=" bg-blue-50 drag-header text-blue-600 p-2 font-medium rounded-md mb-2 cursor-move">
              Q1: How many ounces of water have you had to drink today?
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) =>
                    new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <YAxis domain={[1, 10]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#007bff"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Rnd>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
      >
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 800,
            height: 450,
          }}
          dragHandleClassName="drag-header"
          className="rounded-lg shadow-md bg-white border border-gray-200"
          dragAxis="both"
          style={{ zIndex: 10 }}
          disableDragging={false}
        >
          <div className="h-full w-full p-4 sm:block">
            {/* Header - draggable */}
            <div className="drag-header bg-blue-50 text-blue-600 p-2  font-medium rounded-md mb-2 cursor-move">
              Q2: How many hours of sleep did you get?
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) =>
                    new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <YAxis domain={[1, 10]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#007bff"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Rnd>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
      >
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 600,
            height: 350,
          }}
          dragHandleClassName="drag-header"
          className="rounded-lg shadow-md bg-white border border-gray-200"
          dragAxis="both"
          style={{ zIndex: 10 }}
          disableDragging={false}
        >
          <div className="h-full w-full p-4 overflow-hidden">
            {/* Header - draggable */}
            <div className="drag-header bg-blue-50 text-blue-600 p-2 font-medium rounded-md mb-2 cursor-move">
              Q3: How do you feel today on the scale of 1 to 10?{" "}
              <span className="text-sm font-normal">
                (1 being worse and 10 being best)
              </span>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) =>
                    new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <YAxis domain={[1, 10]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#007bff"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Rnd>
      </motion.div>
    </div>
  );
};

export default Dashboards;
