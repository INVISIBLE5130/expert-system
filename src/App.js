import React, {useState} from 'react'
import {
    AppWrapper,
    AppWrapperMain, AppWrapperMainFirstArea, AppWrapperMainSecondArea,
    AppWrapperTerminal, AppWrapperTerminalBody,
    AppWrapperTerminalHeader, AppWrapperTerminalHeaderIcon, AppWrapperTerminalHeaderTitle
} from "./App.styled";
import ArrowSVG from './assets/arrow.svg'

function App() {
    const [consoleStatus, setConsoleStatus] = useState(false)
    const consoleStatusHandler = () => {
        setConsoleStatus(!consoleStatus)
    }

    return (
        <AppWrapper>
            <AppWrapperMain
                fullHeight={consoleStatus}
            >
                <AppWrapperMainFirstArea

                >

                </AppWrapperMainFirstArea>
                <AppWrapperMainSecondArea

                >

                </AppWrapperMainSecondArea>
            </AppWrapperMain>
            <AppWrapperTerminal>
                <AppWrapperTerminalHeader>
                    <AppWrapperTerminalHeaderTitle>
                        {'Console'}
                    </AppWrapperTerminalHeaderTitle>
                    <AppWrapperTerminalHeaderIcon
                        src={ArrowSVG}
                        alt={'Arrow'}
                        rotate={consoleStatus}
                        onClick={consoleStatusHandler}
                    />
                </AppWrapperTerminalHeader>
                {
                    consoleStatus &&
                    <AppWrapperTerminalBody>
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor enim at mattis consectetur. Suspendisse potenti. Duis dignissim vestibulum nulla. Aenean aliquam viverra sapien, quis tempor dolor aliquet non. Nam tortor quam, vestibulum eget tincidunt nec, pulvinar in justo. Aliquam erat volutpat. Nam facilisis massa efficitur imperdiet finibus. Suspendisse ut nisi augue. Donec et efficitur diam, in lobortis nisi. Vivamus suscipit felis id risus consequat, sed sollicitudin erat venenatis. Donec tempus turpis leo, non imperdiet nunc elementum tristique.'}
                    </AppWrapperTerminalBody>
                }
            </AppWrapperTerminal>
        </AppWrapper>
    );
}

export default App;
