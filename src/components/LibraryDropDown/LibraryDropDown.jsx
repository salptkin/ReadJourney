import Select from "react-select";
import "./LibraryDropDown.css";

const LibraryDropDown = ({ options, defaultValue, onChange }) => {
  return (
    <Select
      options={options}
      classNamePrefix="dropdown"
      isSearchable={false}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default LibraryDropDown;
