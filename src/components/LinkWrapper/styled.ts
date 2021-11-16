import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  color: blue;
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`
