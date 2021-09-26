import react from "react";
import LearnHooks from "./LearnHooks";
import LearnUseEffect from "./LearnUseEffect";


export default function HookLists(){

    return (
        <div>
            <fieldset>
                    <legend>Hooks - useState -</legend>
                    <LearnHooks />
            </fieldset>
            <fieldset>
                    <legend>Hooks - useEffect -</legend>
                    <LearnUseEffect />
            </fieldset>
        </div>
    )
}