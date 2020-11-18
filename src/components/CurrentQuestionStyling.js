import styled from 'styled-components/'

export const Container = styled.div`
  padding-top: 20px;
  background-color: #9ad3bc;
  height: 100vh;
  text-align:center;
`

export const AnswerContainer = styled.div`
  display:flex;
  flex-direction: column; 
  align-items: center;
  @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: center;
  }
`
export const Button = styled.button`
  margin-top: 15px;
  padding: 10px;
  width:240px;
  border:none;
  border-radius:3px;
  background-color: #f3eac2;
  @media (min-width: 1024px) {
    margin: 20px;  
    width:150px;
  }
`
export const NextButton = styled.button`
 padding: 15px;
 width:120px;
 background-color: #fbbedf; 
 border-radius: 15px;
 border:none;
`