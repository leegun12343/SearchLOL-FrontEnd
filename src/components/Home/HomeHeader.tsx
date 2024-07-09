// src/components/Home/HomeHeader.tsx
import styles from "../../styles/Home/Header.module.scss";
import React from "react";

const HomeHeader: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>홈 헤더 설정</div>{" "}
    </header>
  );
};

export default HomeHeader;
