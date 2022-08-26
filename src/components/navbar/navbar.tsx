import React, { useState } from "react";
import "./navbar.styles.scss";
import { ImYoutube2 } from "react-icons/im";
import { AiOutlineSearch, AiFillYoutube } from "react-icons/ai";

interface Props {
  onSubmit: any;
}
const Navbar: React.FC<Props> = ({ onSubmit }) => {
  const [value, setVlaue] = useState<String>("");

  return (
    <section className="headerContainer">
      <nav>
        <ImYoutube2 className="logo" size="140px" />
        <AiFillYoutube className="logo2" size="100px" />
        <form onSubmit={(e) => onSubmit(value, e)}>
          <input
            onChange={(e) => setVlaue(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
      </nav>
    </section>
  );
};

export default Navbar;
