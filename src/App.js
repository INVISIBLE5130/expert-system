import React, {useRef, useState} from 'react'
import {
    AppWrapper,
    AppWrapperMain,
    AppWrapperMainFirstArea,
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
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import {remoteData} from "./SES_KB";
import {color} from "./config";

function App() {
    const uploadButtonRef = useRef(null)
    const [code, setCode] = useState('')
    const [parsedCode, setParsedCode] = useState(remoteData)
    const [consultingStatus, setConsultingStatus] = useState(false)
    const [consoleStatus, setConsoleStatus] = useState(false)
    const [choosenFile, chooseFile] = useState('')
    const [selectedFile, selectFile] = useState('')
    const [mimeType, setMimeType] = useState('')
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState('')
    const [logCounter, setLogCounter] = useState(0)

    const consoleStatusHandler = () => {
        setLogCounter(0)
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
        setConsultingStatus(!consultingStatus)
        //    create logic by text rules
    }

    const exportDataHandler = () => {
        const element = document.createElement("a");
        const file = new Blob([code], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    const setLog = (type, key, value) => {
        const allowedTypes = {
            'warning': {
                backgroundColor: color.keyWord2,
                textColor: '#000'
            },
            'error': {
                backgroundColor: color.keyWord3,
                textColor: '#000'
            },
        }
        if (!Object.keys(allowedTypes).includes(type)) {
            throw new Error( 'Invalid log type')
        }
        setLogCounter(prevState => prevState + 1)
        return (
            <AppWrapperTerminalBody
                textColor={allowedTypes[type].textColor}
                backgroundColor={allowedTypes[type].backgroundColor}
            >
                {key}: {value}
            </AppWrapperTerminalBody>
        )
    }

    return (
        <AppWrapper>
            {
                consultingStatus &&
                <Modal
                    parsedCode={parsedCode}
                    setConsultingStatus={setConsultingStatus}
                />
            }
            <Header
                uploadButtonRef={uploadButtonRef}
                exportDataHandler={exportDataHandler}
                uploadFileHandler={uploadFileHandler}
                startConsultationHandler={startConsultationHandler}
                controlUploadButtonHandler={controlUploadButtonHandler}
            />
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
            </AppWrapperMain>
            <AppWrapperTerminal>
                <AppWrapperTerminalHeader>
                    <AppWrapperTerminalHeaderTitle>
                        {'Console'} {
                        !logCounter ||
                            <div>{logCounter}</div>
                    }
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
                    setLog('warning', 'Error', 'Message')
                }
            </AppWrapperTerminal>
        </AppWrapper>
    );
}

export default App;
