import React from "react";
import api from "../../services/api";
import Post from "../Post/Post";
import styles from "./Home.module.css";

const Home = () => {
  const [data, setData] = React.useState(null);
  const [nextPage, setNextPage] = React.useState(2);
  const [totalPage, setTotalPage] = React.useState(null);
  const sectionPost = React.useRef(null);

  React.useEffect(() => {
    try {
      api.get(`posts?_embed&categories=518`).then((res) => {
        setTotalPage(res.headers["x-wp-totalpages"]);
        const posts = res.data;
        setData(posts);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  function handleLoadMorePost() {
    if (nextPage < totalPage) {
      setNextPage(nextPage + 1);
      api.get(`posts?_embed&categories=518&page=${nextPage}`).then((res) => {
        setTotalPage(res.headers["x-wp-totalpages"]);
        const posts = res.data;
        setData(posts);
      });
    } else {
      setNextPage(2);
      api.get(`posts?_embed&categories=518&page=1`).then((res) => {
        const posts = res.data;
        setData(posts);
      });
    }
  }

  return (
    <main className="container" ref={sectionPost}>
      <h1>Apiki Blog para Devs.</h1>
      <section className={styles.posts}>
        {data && data.map((post) => <Post key={data.id} data={post} />)}
      </section>
      <button onClick={handleLoadMorePost} className={styles.button}>
        Carregar mais...
      </button>
    </main>
  );
};

export default Home;
