import styled from 'styled-components';

export const Button = styled.button`
  /* padding: ${p => p.theme.space[4]}px; */

  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.space[1]}px;
  color: #cecbcb;
  padding: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[1]}px;
  cursor: pointer;
  &:hover {
    background-color: #6fca08;
    color: red;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
