import { FC } from "react"

type PProps = {
  text: string
}


export const TypographyP:FC<PProps> = ({text}) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {text}
    </p>
  )
}