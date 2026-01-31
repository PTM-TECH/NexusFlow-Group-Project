import { useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

function Errorpage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-50">
        <MdErrorOutline size={80} className="text-gray-800" />
        <h1 className="text-gray-800 font-bold text-4xl mb-5">
          Ooops! Page not found.
        </h1>
        <p className="text-2xl">
          We can’t find the page you’re looking for. Head back to the homepage.
        </p>
      </div>
      <div className="flex justify-center align-center gap-2 mt-10">
        <IoReturnDownBack
          size={40}
          className="hover:text-green-500 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p
          className="text-2xl font-bold hover:text-green-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Return Home
        </p>
      </div>
    </div>
  );
}
export default Errorpage;
