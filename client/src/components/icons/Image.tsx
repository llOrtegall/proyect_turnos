import React from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement>{}

export function Image ({ ...props }: Props) {
  return (
    <img {...props} />
  )
}
