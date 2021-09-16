import React, {useRef, useState} from 'react'
import {
    AppWrapper,
    AppWrapperMain,
    AppWrapperMainFirstArea,
    AppWrapperMainSecondArea,
    AppWrapperMainThirdArea, AppWrapperMainThirdAreaStartConsultation, AppWrapperMainThirdAreaUpload,
    AppWrapperMainThirdAreaUploadButton,
    AppWrapperTerminal,
    AppWrapperTerminalBody,
    AppWrapperTerminalHeader,
    AppWrapperTerminalHeaderIcon,
    AppWrapperTerminalHeaderTitle
} from "./App.styled";
import Editor from "react-simple-code-editor";
import {highlight, languages} from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import ArrowSVG from './assets/arrow.svg'

function App() {
    const uploadButtonRef = useRef(null)
    const [code, setCode] = useState('')
    const [consoleStatus, setConsoleStatus] = useState(false)
    const [choosenFile, chooseFile] = useState('')
    const [selectedFile, selectFile] = useState('')
    const [mimeType, setMimeType] = useState('')
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState('')

    const consoleStatusHandler = () => {
        setConsoleStatus(!consoleStatus)
    }

    function readTextFile(file) {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    let allText = rawFile.responseText;
                    setCode(allText);
                }
            }
        }
        rawFile.send(null);
    }


    const uploadFileHandler = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = file && reader.readAsDataURL(file);
        const id = Math.random(),
            addedFiles = []

        if (event.target.files.length !== 0) {
            reader.onprogress = function (event) {
                const loaded = event.loaded,
                    total = event.total
                const data = {
                    progress: Math.floor((loaded / total) * 100),
                    id: id
                }
                if (total < 10000000) {
                    if (addedFiles.filter(e => e.id === id).length === 0) {
                        addedFiles.push(
                            ...addedFiles,
                            data
                        )
                        // setFileLoadingProgress(prevState => [
                        //     ...prevState,
                        //     data
                        // ])
                    } else {
                        // setFileLoadingProgress(
                        //     addedFiles
                        //         .map(e => {
                        //             if (e.id === id) {
                        //                 return {
                        //                     id: id,
                        //                     progress: data.progress
                        //                 }
                        //             }
                        //             return e
                        //         })
                        // )
                    }
                }
            };

            reader.onloadend = function (e) {
                const total = e.total
                // setFileLoadingProgress(fileLoadingProgress.filter(e => e.id !== id))
                if (total < 10000000) {
                    chooseFile([reader.result])
                    selectFile(file)
                    readTextFile([reader.result])
                    setMimeType(file.type)
                    setFileName(file.name)
                    setFile(reader.result.slice(reader.result.indexOf(',') + 1))
                }
            }.bind(this);
        }
    }

    const controlUploadButtonHandler = () => uploadButtonRef?.current?.click()

    const startConsultationHandler = () => {
    //    set consulting status
    //    create consulting modal view
    //    create logic by text rules
    }

    return (
        <AppWrapper>
            <AppWrapperMain
                fullHeight={consoleStatus}
            >
                <AppWrapperMainFirstArea>
                    <Editor
                        value={code}
                        onValueChange={(code) => setCode(code)}
                        highlight={(code) => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                            width: '104%',
                            height: '100%',
                            overflowY: 'auto',
                            boxSizing: 'content-box'
                        }}
                    />
                </AppWrapperMainFirstArea>
                <AppWrapperMainSecondArea>
                    <Editor
                        value={code}
                        onValueChange={(code) => setCode(code)}
                        highlight={(code) => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                            width: '104%',
                            height: '100%',
                            overflowY: 'auto',
                            boxSizing: 'content-box'
                        }}
                    />
                </AppWrapperMainSecondArea>
                <AppWrapperMainThirdArea>
                    <AppWrapperMainThirdAreaUpload
                        type={'file'}
                        ref={uploadButtonRef}
                        onChange={uploadFileHandler}
                    />
                    <AppWrapperMainThirdAreaUploadButton
                        onClick={controlUploadButtonHandler}
                    >
                        {'Upload file'}
                    </AppWrapperMainThirdAreaUploadButton>
                    <AppWrapperMainThirdAreaStartConsultation
                        onClick={startConsultationHandler}
                    >
                        {'Start consultation'}
                    </AppWrapperMainThirdAreaStartConsultation>
                </AppWrapperMainThirdArea>
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
