import dynamic from 'next/dynamic'
import LinkWrapper from '@/components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from '@/components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Home | Porto+Alegre"
        description="Está é a pagina principal do MAPA"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
