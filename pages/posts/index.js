import styles from "../../styles/Posts.module.css";
import Link from "next/link";
export const getStaticProps = async (ctx) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await posts.json();

  return {
    props: {
      todos: data,
    },
  };
};
export default function Index({todos}) {
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <Link key={todo.id} href={"posts/" + todo.id}>
          <div className={styles.todo}>{todo.title}</div>
        </Link>
      ))}
    </div>
  );
}
