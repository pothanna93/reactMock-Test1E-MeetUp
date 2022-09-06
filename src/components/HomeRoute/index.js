import {Link} from 'react-router-dom'

import {
  HomeContainer,
  Nav,
  Image,
  HomeInfo,
  Heading,
  Description,
  Button,
  ImageHome,
} from './styledComponents'

const HomeRoute = props => {
  const {history} = props
  const onClickRegister = () => {
    history.replace('/register')
  }

  return (
    <HomeContainer>
      <Nav>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </Nav>
      <HomeInfo>
        <Heading>Welcome to join us</Heading>
        <Description>Please register for the topic</Description>
        <Link to="/register">
          <Button type="button" onClick={onClickRegister}>
            Register
          </Button>
        </Link>

        <ImageHome
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </HomeInfo>
    </HomeContainer>
  )
}
export default HomeRoute
