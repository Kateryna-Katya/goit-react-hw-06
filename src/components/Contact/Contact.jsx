import style from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={style.item}>
      <div className={style.container}>
        <div className={style.swipper}>
          <IoPerson style={{ fontSize: "12px" }} />
          <p className={style.text}>{name}</p>
        </div>
        <div className={style.swipper}>
          <FaPhone style={{ fontSize: "12px" }} />
          <p className={style.text}>{number}</p>
        </div>
      </div>
      <button
        className={style.delete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
