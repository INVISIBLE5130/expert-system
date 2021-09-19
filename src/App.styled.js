import styled from 'styled-components'
import {color} from "./config";

export const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const AppWrapperMain = styled.div`
  width: 100%;
  display: flex;
  padding: 5vh 5vw;
  background-color: ${color.consoleFont};
  height: ${p => p.fullHeight ? '70vh' : '95vh'};
`

export const AppWrapperMainFirstArea = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid ${color.border};
`

export const AppWrapperMainThirdAreaUploadButton = styled.button`
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

export const AppWrapperTerminal = styled.div`
  width: 100%;
  display: flex;
  margin: auto 0 0;
  flex-direction: column;
`

export const AppWrapperTerminalHeader = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  padding: 1vh 1vw;
  align-items: center;
  background-color: ${color.consoleHeader};
  justify-content: space-between;
`

export const AppWrapperTerminalHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${color.consoleFont};
  font-family: Arial, sans-serif;
  
  & div {
    width: auto;
    padding: 4px;
    display: flex;
    margin-left: 5px;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
    background-color: ${color.keyWord3};
  }
`

export const AppWrapperTerminalHeaderIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  transform: ${p => p.rotate ? 'rotate(0)' : 'rotate(180deg)'};
`

export const AppWrapperTerminalBody = styled.p`
  width: 100%;
  padding: 1vh 1vw;
  overflow-y: auto;
  color: ${p => p.textColor};
  font-family: Arial, sans-serif;
  background-color: ${p => p.backgroundColor};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
`
