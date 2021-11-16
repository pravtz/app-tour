import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      createdAt
      updatedAt
      body {
        html
      }
    }
  }
`
export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      heading
      body {
        html
      }
    }
  }
`
export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      name
      slug
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      name
      location {
        latitude
        longitude
      }
      description {
        html
        text
      }
      gallery {
        url
        width
        height
      }
    }
  }
`
