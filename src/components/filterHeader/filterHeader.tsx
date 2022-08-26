import React from "react";
import "./filterHeader.styles.scss";
import { BsFilter } from "react-icons/bs";
interface Props {
  length: number;
}
const FilterHeader: React.FC<Props> = ({ length }) => {
  return (
    <div className="filterHeader">
      <h2>About {length} Results</h2>
      <div>
        <BsFilter size="40px"/>
        <h2>Filter</h2>
      </div>
    </div>
  );
};

export default FilterHeader;
