import style from "./SearchBox.module.css";

const Searchbox = ({ filter, onChange }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Find contacts by name</h2>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Enter name...."
      />
    </div>
  );
};
export default Searchbox;
