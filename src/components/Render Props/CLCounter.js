export default function ClickCounter ({count,incrementCount}) {
    

        return (
            <div>
                <button onClick={incrementCount}>
                    Clicked {count} times
                </button>
            </div>
        )
}