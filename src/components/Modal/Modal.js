import React, {useEffect, useRef, useState} from 'react'
import {
    ModalWrapper,
    ModalWrapperWindow,
    ModalWrapperWindowBody,
    ModalWrapperWindowBodyAnswerButton,
    ModalWrapperWindowBodyAnswerButtons,
    ModalWrapperWindowBodyAnswerButtonsItem,
    ModalWrapperWindowBodyAnswerInput,
    ModalWrapperWindowBodyQuestion,
    ModalWrapperWindowHeader,
    ModalWrapperWindowHeaderClose,
    ModalWrapperWindowHeaderTitle, ModalWrapperWindowResultTitle
} from "./Modal.styled";
import Close from '../../assets/close.svg'
import {remoteData as rData} from "../../SES_KB";

function Modal(props) {
    const {
        parsedCode,
        setConsultingStatus,
    } = props
    const modalRef = useRef(null)
    const modalWindowRef = useRef(null)
    const [remoteData, setRemoteData] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [data, setData] = useState({
        searchKey: '',
        localKeys: {}
    })

    useEffect(() => {
        if (parsedCode !== {}) {
            setRemoteData(Object.entries(parsedCode?.data))
        }
    }, [parsedCode])

    const searchKeyHandler = e => {
        const value = e.target.value
        setSearchKey(value)
    }

    const setSearchKeyHandler = () => {
        setData({
            searchKey: searchKey,
            localKeys: {}
        })
    }

    const closeModalHandler = () => {
        setConsultingStatus(false)
        setSearchKey('')
        setData({
            searchKey: '',
            localKeys: {}
        })
    }

    const setQuestion = (question, buttons, q) => {
        return (
            <>
                <ModalWrapperWindowBodyQuestion>
                    {question}
                </ModalWrapperWindowBodyQuestion>
                <ModalWrapperWindowBodyAnswerButtons>
                    {
                        buttons?.map(button => {
                            return (
                                <ModalWrapperWindowBodyAnswerButtonsItem
                                    onClick={() => answerIndexHandler({
                                        question: q,
                                        answer: button
                                    })}
                                >
                                    {button}
                                </ModalWrapperWindowBodyAnswerButtonsItem>
                            )
                        })
                    }
                </ModalWrapperWindowBodyAnswerButtons>
            </>
        )
    }

    const tryAgainHandler = () => {
        setSearchKey('')
        setData({
            searchKey: '',
            localKeys: {}
        })
        setRemoteData(Object.entries(rData?.data))
    }

    const showResult = result => {
        return (
            <>
                <ModalWrapperWindowResultTitle>
                    {'Expertise result:'}
                </ModalWrapperWindowResultTitle>
                <ModalWrapperWindowResultTitle>
                    {result}
                </ModalWrapperWindowResultTitle>
                <ModalWrapperWindowBodyAnswerButtons>
                    <ModalWrapperWindowBodyAnswerButtonsItem
                        onClick={tryAgainHandler}
                    >
                        {'Try again'}
                    </ModalWrapperWindowBodyAnswerButtonsItem>
                    <ModalWrapperWindowBodyAnswerButtonsItem
                        onClick={closeModalHandler}
                    >
                        {'Exit'}
                    </ModalWrapperWindowBodyAnswerButtonsItem>
                </ModalWrapperWindowBodyAnswerButtons>
            </>
        )
    }

    const answerIndexHandler = (d) => {
        setRemoteData(remoteData.filter(e => e[0] !== d.question))
        console.log(d)
        setData({
            searchKey: searchKey,
            localKeys: {
                ...data.localKeys,
                [d.question]: d.answer
            }
        })
    }

    console.log(data)

    useEffect(() => {
        function handleClickOutside(event) {
            const target = event.target
            if (
                modalRef?.current?.contains(target) &&
                !modalWindowRef?.current?.contains(target)
            ) {
                setConsultingStatus(false)
                setSearchKey('')
                setData({
                    searchKey: '',
                    localKeys: {}
                })
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, modalWindowRef]);

    console.log(remoteData)

    return (
        <ModalWrapper
            ref={modalRef}
        >
            <ModalWrapperWindow
                ref={modalWindowRef}
            >
                <ModalWrapperWindowHeader>
                    <ModalWrapperWindowHeaderTitle>
                        {'Consulting'}
                    </ModalWrapperWindowHeaderTitle>
                    <ModalWrapperWindowHeaderClose
                        src={Close}
                        onClick={closeModalHandler}
                    />
                </ModalWrapperWindowHeader>
                <ModalWrapperWindowBody>
                    {
                        data.searchKey === ''
                            ? <>
                                <ModalWrapperWindowBodyQuestion>
                                    {'What is your search key?'}
                                </ModalWrapperWindowBodyQuestion>
                                <ModalWrapperWindowBodyAnswerInput
                                    value={searchKey}
                                    onChange={searchKeyHandler}
                                />
                                <ModalWrapperWindowBodyAnswerButton
                                    onClick={setSearchKeyHandler}
                                >
                                    {'Send'}
                                </ModalWrapperWindowBodyAnswerButton>
                            </>
                            : remoteData.length !== 0
                            ? setQuestion(remoteData[0][1]?.question, remoteData[0][1]?.allows, remoteData[0][0])
                            : showResult(JSON.stringify(parsedCode.rules.filter(e => JSON.stringify(e.conditions) === JSON.stringify(data.localKeys))[0]?.action))
                    }
                </ModalWrapperWindowBody>
            </ModalWrapperWindow>
        </ModalWrapper>
    )
}

export default Modal