import {MainContainer, ImgEl, Heading, Para} from './styledComponents'

const NotFound = () => (
  <MainContainer>
    <ImgEl
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found</Para>
  </MainContainer>
)
export default NotFound
