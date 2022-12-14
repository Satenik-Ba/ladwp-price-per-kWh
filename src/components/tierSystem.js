import React, { useContext } from "react";
import styles from "./tierSystem.module.css";
import TotalSumContext from "../store/totalSum-context";

const TierSystem = () => {
  const sumCtx = useContext(TotalSumContext);

  return (
    <div className={styles.tier_wrapper}>
      <h2>Tier System</h2>
      <p>Tier 1 Energy: 1000kWh</p>
      <p>Tier 2 Energy: 2000kWh</p>
      <p>Tier 3 Energy: {">"}3000kWh</p>
      <h3>Total Sum: $ {sumCtx.totalSumTier}</h3>
    </div>
  );
};

export default TierSystem;
