import { render, screen } from '@testing-library/react'
import Map from '.'

describe('#map', () => {
  it('should render without any marker', () => {
    render(<Map />)

    //screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Parque Moinhos de Vento',
      slug: 'parque-moinhos-de-vento',
      location: {
        latitude: -30.027128,
        longitude: -51.2007469
      }
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/Parque Moinhos de Vento/i)).toBeInTheDocument()
  })
})
