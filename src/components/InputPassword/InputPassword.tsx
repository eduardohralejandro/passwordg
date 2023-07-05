import { FaRegCopy } from "react-icons/fa";

import styles from "../InputPassword/input_password.module.scss";


const InputPassword = () => {
  return (
    <div className={styles.input_container}>
      <input type="text" name="password" placeholder="P4$5W0rD !" className={styles.input} />
      <FaRegCopy className={styles.copy_icon} />
    </div>
  );
};


export default InputPassword;
