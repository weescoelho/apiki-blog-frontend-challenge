import React from "react";
import api from "../../services/api";
import { useParams } from "react-router";
import styles from "./PostContent.module.css";

const PostContent = () => {
  const [dataContent, setDataContent] = React.useState(null);
  const { slug } = useParams();

  React.useEffect(() => {
    api.get(`posts?_embed&slug=${slug}`).then((res) => {
      const posts = res.data;
      setDataContent(posts);
    });
  }, [slug]);

  console.log(dataContent);

  return (
    <React.Fragment>
      {dataContent && (
        <>
          <div
            className={styles.image}
            style={{
              background: `url(${dataContent[0]._embedded["wp:featuredmedia"][0].source_url})`,
            }}
          ></div>
          <section className="container">
            <h1 style={{fontSize:'36px'}}>{dataContent[0].title.rendered}</h1>
            <main className={styles.post}>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: dataContent[0].content.rendered,
                }}
              ></div>
            </main>
          </section>
        </>
      )}
    </React.Fragment>
  );
};

export default PostContent;
