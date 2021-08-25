import styles from '../../styles/Todo.module.css'
export const getStaticPaths = async () => {
const posts = await fetch("https://jsonplaceholder.typicode.com/todos");
const data = await posts.json();
const paths = data.map(todo=>({params:{id:todo.id.toString()}}))
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps = async (ctx) => {
   const id = ctx.params.id;
const data = await fetch("https://jsonplaceholder.typicode.com/todos/"+id);
const todo = await data.json();
    return {
        props:{
           todo
        }
    }
}
export default function Post({todo}) {
    return (
        <div className={styles.container} key={todo.id}>
           
           <span>id : {todo.id}</span> 
           <span>userId : {todo.userId}</span> 
           <span>title : {todo.title}</span> 
           <span>completed : {todo.completed.toString()}</span> 
        </div>
    )
}
