import React from "react";
import styles from "./articleWrite.module.css";

const ArticleWrite = (props) => {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <p className={styles.title}>여행기/노하우 작성</p>
        <p className={styles.desc}>
          트래블위드독과 함께한 여러분의 솔직한 여행기 또는 노하우를 들려주세요
        </p>
        <select className={styles.division_select}>
          <option value="">분류</option>
          <option value="여행기">여행기</option>
          <option value="노하우">노하우</option>
        </select>
        <input
          type="text"
          className={styles.title_input}
          spellCheck="false"
          placeholder="내용을 입력하세요"
        />
        <div className={styles.editort_container}>여기에 에디터</div>
        <div className={styles.button_container}>
          <button className={styles.button}>업로드</button>
        </div>
      </main>
    </div>
  );
};

export default ArticleWrite;
