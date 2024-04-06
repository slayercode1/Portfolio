import { FC } from "react"

type H1Props = {
  text: string
}

export const TypographyH1: FC<H1Props> = ({ text }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-4  dark:text-white">
      {text}
    </h1>
  )
}