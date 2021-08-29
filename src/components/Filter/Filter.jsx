import propTypes from "prop-types";

function Filter({ onChangeFilterInput }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChangeFilterInput}></input>
    </div>
  );
}

Filter.propTypes = {
  onChangeFilterInput: propTypes.func,
};

export default Filter;
