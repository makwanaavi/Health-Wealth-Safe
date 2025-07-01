import { FaChartLine } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const HealthCards = () => {
  const cards = [
    {
      bg: "bg-orange-100",
      iconBg: "bg-orange-400 ",
      icon: <FaChartLine className="text-white" />,
      value: 4,
      title: "How do you feel?",
    },
    {
      bg: "bg-cyan-100",
      iconBg: "bg-cyan-600",
      icon: <FaChartLine className="text-white" />,
      value: 7,
      unit: "ounces",
      title: "Water intake",
    },
    {
      bg: "bg-red-100",
      iconBg: "bg-red-500",
      icon: <FaPerson className="text-white" />,
      value: 4,
      unit: "Hours",
      title: "Hours of sleep",
    },
  ];

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-60 p-1 rounded-2xl ${card.bg} shadow-sm flex-shrink-0`}
        >
          <div className="flex p-1.5 justify-between items-start">
            <div className={`w-14 h-14 ${card.iconBg} rounded-full flex items-center justify-center`}>
              {card.icon}
            </div>
            <div className="text-2xl font-semibold">{card.value}</div>
          </div>
          <div className="mt-2 text-sm text-end text-gray-600">
            <span className={`text-sm ${card.unit === "Hours" ? "text-red-500" : card.unit === "ounces" ? "text-cyan-600" : ""}`}>
              {card.unit}
            </span>
          </div>
          <div className="text-sm font-medium mt-1 text-end">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HealthCards;
