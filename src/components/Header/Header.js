import React from 'react'
import {
    HeaderWrapper,
    HeaderWrapperAuthButtons,
    HeaderWrapperAuthButtonsSignIn,
    HeaderWrapperAuthButtonsSignUp,
    HeaderWrapperButtons,
    HeaderWrapperStartConsultation,
    HeaderWrapperTitle,
    HeaderWrapperUpload,
    HeaderWrapperUploadButton
} from "./Header.styled";

function Header(props) {
    const {
        uploadButtonRef,
        uploadFileHandler,
        startConsultationHandler,
        controlUploadButtonHandler,
        exportDataHandler,
    } = props

    return (
        <HeaderWrapper>
            <HeaderWrapperTitle>
                {'Expert system'}
            </HeaderWrapperTitle>
            <HeaderWrapperButtons>
                <HeaderWrapperUpload
                    type={'file'}
                    ref={uploadButtonRef}
                    onChange={uploadFileHandler}
                />
                <HeaderWrapperUploadButton
                    onClick={controlUploadButtonHandler}
                >
                    {'Upload button'}
                </HeaderWrapperUploadButton>
                <HeaderWrapperStartConsultation
                    onClick={exportDataHandler}
                >
                    {'Export button'}
                </HeaderWrapperStartConsultation>
                <HeaderWrapperStartConsultation
                    onClick={startConsultationHandler}
                >
                    {'Start consulting'}
                </HeaderWrapperStartConsultation>
            </HeaderWrapperButtons>
            <HeaderWrapperAuthButtons>
                <HeaderWrapperAuthButtonsSignIn>
                    {'Sign In'}
                </HeaderWrapperAuthButtonsSignIn>
                <HeaderWrapperAuthButtonsSignUp>
                    {'Sign Up'}
                </HeaderWrapperAuthButtonsSignUp>
            </HeaderWrapperAuthButtons>
        </HeaderWrapper>
    )
}


export default Header