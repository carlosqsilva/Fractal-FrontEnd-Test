import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background-color: white;
  border-radius: 4px;
  min-height: 100px;
  margin-bottom: 15px;
`

const Image = styled.img`
  width: 35px;
  padding: 5px;
  height: 100px;
  border-radius: 4px;
  margin: -20px 0 0 10px;
  filter: drop-shadow(5px 5px 1px #212125);
`

const Info = styled.div`
  font-family: 'Yanone', sans-serif;
  flex: 1;
  padding: 10px;
  color: #424242;
  text-align: left;
  align-self;
  > p {
    margin-top: 5px;
    font-size: 14px;
  }
`

const BeerCard = props => {
  const { id, image_url, name, tagline } = props.info
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <Container>
        <Image src={image_url} alt="" />
        <Info>
          <h3>{name}</h3>
          <p>{tagline}</p>
        </Info>
      </Container>
    </Link>
  )
}

export default BeerCard
