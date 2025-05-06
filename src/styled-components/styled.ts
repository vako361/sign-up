import styled from "styled-components";
export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  margin-top: 50%;
`
export const Text = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
width: 327px;
height: auto;
align-items: center;
justify-content: center;
margin-bottom: 64px;
`
export const Title = styled.h1`
color: #fff;
font-size: 28px;
font-weight: 500;
line-height: 26px;
width: 100%;
text-align: center;

`
export const Description = styled.p`
color: #FFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 26px;
width: 100%;
`
export const Plan = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
background: #5E54A4;
box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
width: 100%;
height: 88px;
margin-bottom: 24px;
`
export const StyledSignUp =  styled.section`
width: 100%;
height: 442px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 16px;
padding-top: 24px;
`
export const Input = styled.input<{ $error?: boolean }>`
width: 279px;
height: 56px;
border-radius: 5px;
border: 1px solid #DEDEDE;
background: #FFF;
padding-left: 20px;

`
