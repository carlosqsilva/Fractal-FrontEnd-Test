import React from "react"
import styled from "styled-components"
import arrow from "./arrow.svg"

const Wrapper = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 10px 10px 10px;
`
const BackButton = styled.div`
  background-color: #c1c0b9;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  display: inline-flex;
  justify-content: space-between;
  margin: 10px 10px 30px 10px;
  padding: 5px;
  width: 100px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  width: 100%;
`

const ImageContainer = styled.div`
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const Info = styled.div`
  padding: 40px 30px 30px 40px;
  color: #424242;
  span {
    font-family: "Yanone", sans-serif;
    font-weight: bold;
  }
  > h2,
  p {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 20px 20px 10px;
  }
`

const Beer = ({ match, history, data }) => {
  if (data.length === 0) {
    history.push("/")
    return null
  }

  const id = match.params.id * 1
  const { name, tagline, image_url, description, brewers_tips } = data.find(
    beer => beer.id === id
  )
  return (
    <Wrapper>
      <BackButton onClick={() => history.push("/")}>
        <img src={arrow} alt="" />
        Go Back
      </BackButton>
      <Container>
        <ImageContainer>
          <img src={image_url} height={350} alt="" />
        </ImageContainer>
        <Info>
          <h2>{name}</h2>
          <p>{tagline}</p>
          <p>
            <span>Description:</span> {description}
          </p>
          <p>
            <span>Tips:</span> {brewers_tips}
          </p>
        </Info>
      </Container>
    </Wrapper>
  )
}

export default Beer
