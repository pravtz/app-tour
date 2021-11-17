import LinkWrapper from '@/components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { Wrapper, Container, Heading, Body, Gallery } from './styled'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export type ImageProps = {
  url: string
  width: string
  height: string
}
export type PlacesTemplateProps = {
  place: {
    name: string
    slug: string
    location: {
      latitude: string
      longitude: string
    }
    description: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}
export default function PlaceTemplate({ place }: PlacesTemplateProps) {
  return (
    <Wrapper>
      <NextSeo
        title={`${place.name} | Porto+Alegre `}
        description={place.description?.text}
      />
      <Container>
        <LinkWrapper href="/">
          <CloseOutline size={32} aria-label="go back to map" />
        </LinkWrapper>
        <Heading>{place.name}</Heading>

        <Body
          dangerouslySetInnerHTML={
            { __html: place.description?.html } || '<h3>Sem descrição </h3>'
          }
        />
        <Gallery>
          {place.gallery.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={place.name}
              width={1000}
              height={600}
              quality={75}
              objectFit={'contain'}
            />
          ))}
        </Gallery>
      </Container>
    </Wrapper>
  )
}
