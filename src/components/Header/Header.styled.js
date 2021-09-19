import styled from 'styled-components'
import {color} from "../../config";
import {AppWrapperMainThirdAreaUploadButton} from "../../App.styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  background-color: ${color.consoleHeader};
`

export const HeaderWrapperTitle = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: ${color.consoleFont};
  font-family: Arial, sans-serif;
`

export const HeaderWrapperButtons = styled.div`
  display: flex;
  margin-left: 30px;
`

export const HeaderWrapperUpload = styled.input`
  display: none;
`

export const HeaderWrapperUploadButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: max-content;
  padding: 10px 15px;
  border-radius: 7px;
  height: max-content;
  color: ${color.consoleFont};
  background: ${color.border};
`

export const HeaderWrapperStartConsultation = styled(HeaderWrapperUploadButton)`
  margin-left: 10px;
`

export const HeaderWrapperAuthButtons = styled.div`
  display: flex;
  margin: 0 0 0 auto;
`

export const HeaderWrapperAuthButtonsSignIn = styled(HeaderWrapperUploadButton)`
`

export const HeaderWrapperAuthButtonsSignUp = styled(HeaderWrapperStartConsultation)`
`
