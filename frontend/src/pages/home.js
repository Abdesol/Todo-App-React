import Navbar from "../layouts/Navbar";
import TodoList from "../layouts/TodoList";


const Home = () => {
    const todos = [
        {
            id:1,
            title:"Do chores",
            isDone:false
        },
        {
            id:2,
            title:"Do Homework",
            isDone:false
        },
        {
            id:3,
            title:"Learn react very well",
            isDone:true
        }
    ];

    return ( 
    <div>
        <Navbar/>
        <TodoList todos={todos}/>
    </div> );
}
 
export default Home;