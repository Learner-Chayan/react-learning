


export default function HoverCounter({count,incrementCount}){

        return (
            <div>
                <a onMouseOver={incrementCount}>
                    Hoverd {count} times
                </a>
            </div>
        )
}