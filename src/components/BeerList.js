import React from "react"
import styled from "styled-components"
import BeerCard from "./BeerCard"

const Wrapper = styled.div`
  grid-column: 2;
  text-align: center;
`

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: 10px;
  margin-bottom: 20px;
`

const Title = styled.h1`
  color: #3a4752;
  margin: 15px;
`

const Button = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 0.6rem 0.8rem;
  background-color: #f5841a;
  border-radius: 2px;
  cursor: pointer;
`

const BeerList = props => {
  const { data, click } = props
  return (
    <Wrapper>
      <Title>Choose Your Beer :)</Title>
      <Container>
        {data.map(beer => <BeerCard key={beer.name} info={beer} />)}
      </Container>
      <Button onClick={click}>Load More</Button>
    </Wrapper>
  )
}

export default BeerList
