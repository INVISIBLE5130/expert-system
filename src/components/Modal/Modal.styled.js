import styled from 'styled-components'
import {color} from "../../config";
import {HeaderWrapperUploadButton} from "../Header/Header.styled";

export const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  position: fixed;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.25);
`

export const ModalWrapperWindow = styled.div`
  width: 90%;
  height: 80vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const ModalWrapperWindowHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: center;
`

export const ModalWrapperWindowHeaderTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: Arial, sans-serif;
`

export const ModalWrapperWindowHeaderClose = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin: 0 0 0 auto;
`

export const ModalWrapperWindowBody = styled.div`
  height: 100%;
  display: flex;
  overflow-y: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ModalWrapperWindowBodyQuestion = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 25px;
  font-family: Arial, sans-serif;
`

export const ModalWrapperWindowBodyAnswerInput = styled.input`
  width: 50%;
  padding: 5px;
  outline: none;
  align-self: center;
  border: 1px solid ${color.border};
`

export const ModalWrapperWindowBodyAnswerButtons = styled.div`
  display: flex;
`

export const ModalWrapperWindowBodyAnswerButtonsItem = styled(HeaderWrapperUploadButton)`
  margin-left: 10px;
  
  &:first-child {
    margin-left: unset;
  }
`

export const ModalWrapperWindowBodyAnswerButton = styled(HeaderWrapperUploadButton)`
  margin-top: 25px;
  align-self: center;
`

export const ModalWrapperWindowResultTitle = styled(ModalWrapperWindowHeaderTitle)`
  margin-bottom: 15px;
`