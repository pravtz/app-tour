import styled from 'styled-components'

export const About__wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`
export const About__Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`
export const About__Body = styled.p`
  color: ${(props) => props.theme.colors.primary};
`
