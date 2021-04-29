import React from "react";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const Post = ({ data }) => {
  console.log();

  return (
    <article className={styles.post}>
      <div className={styles.postImage}>
        <img src={data._embedded["wp:featuredmedia"][0].source_url} alt="" />
      </div>
      <div>
        <Link to={`post/${data.slug}`} className={styles.titleLink}>{data.title.rendered}</Link>
        <p
          className={styles.postIntroContent}
          dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
        ></p>
      </div>
    </article>
  );
};

export default Post;
