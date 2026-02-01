import { useParams } from "react-router-dom";

function Servicedetails() {
  //get the name from the url
  const { name } = useParams();
  return (
    <div className="flex flex-col jutify-center items-center h-screen text-center mt-20">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">{name}</h1>
      <p className="text-gray-700 text-xl">{name} content coming soon</p>
    </div>
  );
}
export default Servicedetails;
