import { About__Body, About__Heading, About__wrapper } from './styled'
import LinkWrapper from '@/components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { NextSeo } from 'next-seo'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <About__wrapper>
    <NextSeo
      title={`${heading} | Porto+Alegre`}
      description={`Está é a pagina ${heading}`}
    />
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Home" />
    </LinkWrapper>
    <About__Heading>{heading}</About__Heading>
    <About__Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </About__Body>
  </About__wrapper>
)
export default PageTemplate
