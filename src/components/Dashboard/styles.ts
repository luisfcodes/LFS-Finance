import styled from "styled-components";

export const Container = styled.section`

  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 25%);
  justify-content: center;
  grid-gap: 1rem;

  div{
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: var(--red);
    

    &:first-child{
      background-color: var(--green);
    }

    &:last-child {
      background-color: var(--blue-dark);
    }

    h3{
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1.3rem;
      font-weight: 600;

      &:first-child{
        color: aliceblue;
      }
    }

  }
`