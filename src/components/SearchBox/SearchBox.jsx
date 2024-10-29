import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filtersSlice/filtersSlice";

const Searchbox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <div className={style.container}>
      <h2 className={style.title}>Find contacts by name</h2>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter name...."
      />
    </div>
  );
};
export default Searchbox;
