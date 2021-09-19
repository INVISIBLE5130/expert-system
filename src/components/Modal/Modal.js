import React, {useEffect, useRef, useState} from 'react'
import {
    ModalWrapper,
    ModalWrapperWindow,
    ModalWrapperWindowBody,
    ModalWrapperWindowBodyAnswerButton, ModalWrapperWindowBodyAnswerButtons, ModalWrapperWindowBodyAnswerButtonsItem,
    ModalWrapperWindowBodyAnswerInput,
    ModalWrapperWindowBodyQuestion,
    ModalWrapperWindowHeader,
    ModalWrapperWindowHeaderClose,
    ModalWrapperWindowHeaderTitle, ModalWrapperWindowResultTitle
} from "./Modal.styled";
import Close from '../../assets/close.svg'

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

    const setQuestion = (question, buttons) => {
        return (
            <>
                <ModalWrapperWindowBodyQuestion>
                    {question}
                </ModalWrapperWindowBodyQuestion>
                <ModalWrapperWindowBodyAnswerButtons>
                    {
                        buttons?.map((button, index) => {
                            return (
                                <ModalWrapperWindowBodyAnswerButtonsItem
                                    onClick={() => answerIndexHandler(index)}
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

    const answerIndexHandler = index => {
        console.log(index)
    }

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
                            // : setQuestion(remoteData[0][1]?.question, remoteData[0][1]?.allows)
                            : showResult('test')
                    }
                </ModalWrapperWindowBody>
            </ModalWrapperWindow>
        </ModalWrapper>
    )
}

export default Modal