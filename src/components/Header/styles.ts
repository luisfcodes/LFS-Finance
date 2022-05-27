import styled from "styled-components";

export const Container = styled.header`

  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #515A5A;

  button {

    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;

    img {
      width: 35px;
      height: 35px;
      margin-right: 0.5rem;
    }

  }

  ul {
    display: flex;
    align-items: center; 
    gap: 0.8rem;
  }

`