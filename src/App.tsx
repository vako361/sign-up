import { Title } from './styled-components/styled'
import { Wraper } from './styled-components/styled'
import { Text } from './styled-components/styled'
import { Description } from './styled-components/styled'
import { Plan } from './styled-components/styled'
import SignUp from './jsx-components/SignUp'
function App() {
 

  return (
    <Wraper>
      <Text>
   <Title>Learn to code by watching others</Title>
   <Description>See how experienced developers solve problems in real-time. 
    Watching scripted tutorials is great, but understanding how developers think is invaluable.
   </Description>
   </Text>
 <Plan>
  <p className='txt-wrap'>Try it free 7 days <span> then $20/mo. thereafter</span></p>
 </Plan>
 <SignUp />
    </Wraper>
  )
}


export default App
