import {Component} from 'react'

import {
  MainContainer,
  Nav,
  Image,
  RegisterDiv,
  ImgDiv,
  ImageReg,
  Heading,
  LabelEle,
  InputEle,
  SelectEle,
  OptionEl,
  BtnElement,
  FormElement,
  Para,
  FormDiv,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  state = {
    username: '',
    selectElement: '',
    isNun: false,
  }

  onAddFormSubmit = event => {
    event.preventDefault()
    const {username, selectElement} = this.state
    if (username === '' || selectElement === '') {
      this.setState({
        isNun: true,
      })
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  onChangeSelect = event => {
    this.setState({
      selectElement: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    const {username, selectElement, isNun} = this.state

    return (
      <MainContainer>
        <Nav>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </Nav>
        <RegisterDiv>
          <ImgDiv>
            <ImageReg
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
          </ImgDiv>
          <FormDiv>
            <Heading>Let us join</Heading>
            <FormElement onSubmit={this.onAddFormSubmit}>
              <LabelEle htmlFor="name">NAME</LabelEle>
              <InputEle
                type="text"
                id="name"
                onChange={this.onChangeUsername}
                value={username}
              />
              <LabelEle htmlFor="topics">TOPICS</LabelEle>
              <SelectEle
                onChange={this.onChangeSelect}
                value={selectElement}
                id="topics"
              >
                {topicsList.map(eachItem => (
                  <OptionEl key={eachItem.id} value={eachItem.id}>
                    {eachItem.displayText}
                  </OptionEl>
                ))}
              </SelectEle>
              <BtnElement type="submit">Register Now</BtnElement>
            </FormElement>

            {isNun && <Para>Please enter your name</Para>}
          </FormDiv>
        </RegisterDiv>
      </MainContainer>
    )
  }
}

export default RegisterRoute
