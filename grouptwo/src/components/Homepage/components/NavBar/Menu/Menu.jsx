import { Link } from "react-scroll";
import { useState } from "react";
function Menu() {
  const [active, setActive] = useState("home");
  return (
    <nav>
      <ul className="flex justify-center gap-5 font-medium text-gray-700">
        <li>
          <Link
            onClick={() => setActive("home")}
            className={
              active === "home"
                ? "text-green-500 font-semibold"
                : "text-gray-800 hover:text-xl hover:text-green-500 cursor-pointer"
            }
            to="herosection"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActive("features")}
            className={
              active === "features"
                ? "text-green-500 font-semibold"
                : "text-gray-800 hover:text-xl hover:text-green-500 cursor-pointer"
            }
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Features
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setActive("about")}
            className={
              active === "about"
                ? "text-green-500 font-semibold"
                : "text-gray-800 hover:text-xl hover:text-green-500 cursor-pointer"
            }
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActive("contact")}
            className={
              active === "contact"
                ? "text-green-500 font-semibold"
                : "text-gray-800 hover:text-xl hover:text-green-500"
            }
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
