import React from 'react'

export function RecomendationCard({ image, ticker, companyName }) {
  return (
    <a href={`/ticker/${ticker}`}>
      <img src={`images/${image}`} alt={companyName} />
    </a>
  )
}
