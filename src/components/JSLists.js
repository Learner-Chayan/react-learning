import JS from "./JS";

function JSLists({topics})
{
    console.log(topics);
    return (
        <div>
            {
                topics.map((list)=>
                 <JS topic={list} key={list} />
                )
            }
        </div>
    )
}

export default JSLists