import React from "react";
// import { FileText, MessageSquare, Envato } from "lucide-react";
import { MdOutlineMessage } from "react-icons/md";
import { SiGrammarly } from "react-icons/si";
import { DiEnvato } from "react-icons/di";
import { FaAmilia } from "react-icons/fa6";

const icons = {
  ChatGPT: <MdOutlineMessage className="w-6 h-6 text-indigo-600" />,
  Grammarly: <SiGrammarly className="w-6 h-6 text-green-600" />,
  Envato: <DiEnvato className="w-6 h-6 text-pink-600" />,
  Ahrefs: <FaAmilia className="w-6 h-6 text-pink-600" />,
};

function ServiceCard({ name, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 hover:shadow-2xl transition duration-300">
      <div className="p-3 bg-gray-100 rounded-full w-max">{icons[name]}</div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <button className="mt-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition">
        View Plans
      </button>
    </div>
  );
}

export default ServiceCard;
