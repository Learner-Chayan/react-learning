import React from 'react'
import Clock from './Clock'
import Brackets from './composition/Brackets';
import Emoji from './composition/Emoji';
import Text from './composition/Text';
import Forms from './Forms';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import JSLists from './JSLists';
import Counter from './Render Props/Counter';
import Calculator from './state/Calculator';
import CLCounter from './Render Props/CLCounter';
import HVCounter from './Render Props/HVCounter';
import Section from './context-api-concept/Section';
import themeContext from '../contexts/themeContext';
import FirstContext from './context/FirstContext';
import HookLists from './Hooks/HookLists';

class MainComponent  extends React.Component{
    render(){
        let jsTopics = ['Angular','Vue','React','Node'];
        const theme = 'dark';
        
        return (
            <div>
                <fieldset>
                    <legend>Basic</legend>
                    <Clock lang="bn-BD" />
                </fieldset>
                <fieldset>
                    <legend>Lists</legend>
                    <JSLists topics={jsTopics} />
                </fieldset>
                <fieldset>
                    <legend>Form Handling</legend>
                    <Forms />
                </fieldset>
                <fieldset>
                    <legend>Lifting State Up - Think State in a React way </legend>
                    <Calculator />
                </fieldset>
                <fieldset>
                    <legend>React Composition</legend>
                    <Emoji>
                        {({addEmoji}) => (
                            <Brackets>
                                {({addBracket}) => 
                                    <Text addEmoji={addEmoji} addBracket = {addBracket} />
                                }
                            </Brackets>
                        )}
                    </Emoji>
                </fieldset>
                <fieldset>
                    <legend>Higher Order Component</legend>
                    <ClickCounter />
                    <HoverCounter />
                </fieldset>
                <fieldset>
                    <legend>Render Props</legend>
                    <Counter
                        renderCount={(count,incrementCount)=>(
                            <CLCounter count={count} incrementCount={incrementCount} />
                        )}
                    />

                    <Counter
                        renderCount={(count,incrementCount)=>(
                            <HVCounter count={count} incrementCount={incrementCount} />
                        )}
                    />
                </fieldset>
                <fieldset>
                    <legend>Context api Concept</legend>
                    <themeContext.Provider value={{theme:theme}}>
                        <Section />
                    </themeContext.Provider>
                </fieldset>
                <fieldset>
                    <legend>Hooks</legend>
                    <HookLists />
                </fieldset>
                <fieldset>
                    <legend>Context - from react documentation</legend>
                    <FirstContext />
                </fieldset>
                
            </div>
        )
    }
}

export default MainComponent