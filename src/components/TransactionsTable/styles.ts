import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  table {
    width: 90%;
    border-radius: 0.5rem;
    padding: 1rem;
    border-spacing: 0 0.5rem;
    
    th{
      text-align: start;
      font-size: 1.2rem;

      &:first-child {
        padding-left: 1rem;
      }
    }

    tbody tr td {
      border: 0;
      background-color: #ECF0F1;
      padding: 0.5rem 0;
      color: var(--background);

      &:first-child {
        padding-left: 1rem;
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
      
    }
  }
`