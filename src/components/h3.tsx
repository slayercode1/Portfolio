import { FC } from "react"

type H3Props = {
  text: string
}


export const TypographyH3: FC<H3Props> = ({ text }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-5 dark:text-white">
      {text}
    </h3>
  )
}
