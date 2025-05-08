import styled from "styled-components";


export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  margin-top: 50%;
  
  @media (min-width: 1000px) {
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50%;
    width: 100vh;
  }
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
@media (min-width: 1000px) {
  margin-right: 45px;
  margin-left:165px;
  width: 540px;
  gap:10px;
  height: 220px;
  width: 580px;
}
`
export const Title = styled.h1`
color: #fff;
font-size: 28px;
font-weight: 500;
line-height: 26px;
width: 100%;
text-align: center;
@media (min-width: 1000px) {
font-size: 50px;
font-weight: 700;
line-height: 55px;
width: 580px;
text-align: left;
letter-spacing: -0.521px;
}
` 
export const Description = styled.p`
color: #FFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 26px;
width: 100%;
@media (min-width: 1000px) {
font-size: 18px;
text-align: left;
width: 580px;
font-size: 16px;
font-weight: 500;
line-height: 26px;
}`
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
padding: 24px 12px;
@media (min-width: 1000px) {
  width: 540px;
  height: 500px;
  padding: 24px 40px;
}
`
export const Input = styled.input` 
  width: 90%;
  height: 56px;
  border-radius: 5px;
  padding-left: 20px;
  border: none ;
  background: #fff;
  background-repeat: no-repeat;
  background-position: 95% center;
`;