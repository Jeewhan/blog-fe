import React from "react";
import { formatDistance, subDays } from "date-fns";
import classNames from "classnames/bind";

import styles from "./TopPost.module.scss";

const cx = classNames.bind(styles);

const TopPost = () => (
  <article className={cx("article")}>
    <header className={cx("header")}>
      <span>TOP STORY</span>
      <h2>News Title</h2>
    </header>
    <footer className={cx("footer")}>
      <ul>
        <li>HEAVY</li>
        <li className={cx("buffer")}> · </li>
        <li>
          <time dateTime={new Date().toJSON()}>
            {formatDistance(subDays(new Date(), 2), Date.now(), {
              addSuffix: true
            })}
          </time>
        </li>
      </ul>
    </footer>
  </article>
);

export default TopPost;
