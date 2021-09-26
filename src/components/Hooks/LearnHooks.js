import { useState } from "react"


export default function LearnHooks(){

    const [todoList,setTodoList] = useState([]);
    const [todo,setTodo] = useState('');
    const [warning, setWarning] = useState(null);


   const onToDoChange = (e)=> {
        setTodo(e.target.value);
    }

    const addTodo = ()=> {
        let warn = todoList.length > 2 ? 'To Do List Should be less than 4 ' : null;
        if(warn) {setWarning(warn); return;}
        setTodoList([...todoList,todo]);
        setTodo('');
    }

    //// take special look here
    const [count , setCount] = useState(0);
    const addOne = ()=>{
        setCount(count + 1);
    }

    let i = 0;
    const addFive = ()=> {
        while(i<5)
        {
            setCount(count + 1);
            i++;
        }
    }
    let j = 0;
    const addFive2 = ()=> {
        while(j<5)
        {
            setCount((prevCount)=>prevCount + 1);
            j++;
        }
    }



    return (
        <div>
            <textarea value={todo} onChange={onToDoChange} ></textarea>
            <button onClick={addTodo} type='button'> Submit </button>
            <br/>
            <small style={{color:'red'}}>{warning}</small>
            <ol>
                {todoList.map((todo,i) => {
                  return <li key={i}>{todo}</li>
                     })}
            </ol>

             <p>Count Value - {count}</p>
            <button onClick={addOne}>Count by 1</button>
            <button onClick={addFive}>Count by 5 - using while loop</button>
            <button onClick={addFive2}>Count by 5 - using while loop and  arrow function</button>
        </div>
    )
}