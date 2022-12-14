import React, { useContext } from "react";
import styles from "./userInput.module.css";
import TotalSumContext from "../store/totalSum-context";

function UserInput() {
  const kwUsedCtx = useContext(TotalSumContext);

  function handleChange(e) {
    if (e.target.value === "") {
      kwUsedCtx.kwUsedFunc(0);
      return;
    }
    kwUsedCtx.kwUsedFunc(parseInt(e.target.value));
  }

  return (
    <div className={styles.container}>
      <p>Total kWh Usage: </p>
      <input
        className={styles.userInput}
        type="text"
        placeholder=" kWh"
        onChange={handleChange}
        value={kwUsedCtx.kwUsed}
      />
    </div>
  );
}

export default UserInput;
