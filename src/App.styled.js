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

export const AppWrapperMainFirstArea = styled.textarea`
  width: 35%;
  resize: none;
  padding: 16px;
  outline: none;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  color: ${color.background};
  font-family: Arial, sans-serif;
  border: 1px solid ${color.border};
`

export const AppWrapperMainSecondArea = styled(AppWrapperMainFirstArea)`
  margin-left: 5%;
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

export const AppWrapperTerminalHeaderTitle = styled.p`
  color: ${color.consoleFont};
  font-family: Arial, sans-serif;
`

export const AppWrapperTerminalHeaderIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  transform: ${p => p.rotate ? 'rotate(0)' : 'rotate(180deg)'};
`

export const AppWrapperTerminalBody = styled.p`
  width: 100%;
  height: 25vh;
  padding: 1vh 1vw;
  overflow-y: auto;
  color: ${color.consoleFont};
  font-family: Arial, sans-serif;
  background-color: ${color.background};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
`
