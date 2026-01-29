function Menu() {
  return (
    <div>
      <ul className="flex justify-center gap-5 font-medium text-gray-700">
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <a href="#">Features</a>
        </li>
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <a href="#">Pricing</a>
        </li>
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <a href="#">About</a>
        </li>
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
