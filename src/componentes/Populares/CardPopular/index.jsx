import React from 'react'

export default function CardPopular({popular, styles}) {
  return (
    <li key={popular.id}>
      <img src={popular.path} alt={popular.alt} />
    </li>
  )
}
