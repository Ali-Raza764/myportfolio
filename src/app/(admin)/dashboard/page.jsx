import { FaRegEye, FaRegNewspaper } from "react-icons/fa";
import { GrTools } from "react-icons/gr";

const DashBoardPage = () => {
  const dashBoardStats = [
    { name: "Visitors", icon: <FaRegEye />, count: 100 },
    { name: "Projects", icon: <GrTools />, count: 6 },
    { name: "Blogs", icon: <FaRegNewspaper />, count: 12 }
  ];

  return (
    <main className="h-full w-full flex flex-wrap items-center justify-center gap-8 p-8 bg-black text-white">
      {dashBoardStats.map((item, index) => (
        <DashBoardItem key={index} name={item.name} icon={item.icon} count={item.count} />
      ))}
    </main>
  );
};

const DashBoardItem = ({ name, icon, count }) => {
  return (
    <div className="h-[12rem] w-[12rem] bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 hover:bg-gray-700 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-2xl mt-2">{count}</p>
    </div>
  );
};

export default DashBoardPage;
