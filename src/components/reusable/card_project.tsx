import { FC } from "react"
import { Badge } from "../ui/badge"
import noImage from '../../assets/img/no-image.png'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
type CardProjectProps = {
  technologie: Array<string>
  company: string
  image?: string
}

export const CardProject: FC<CardProjectProps> = ({ image, company, technologie }) => {
  return (
    <Card className="block rounded-lg w-76 p-4">
      <CardHeader className="p-1">
        <img
          alt="image of project"
          src={image ? image : noImage}
          className="h-60 w-60 rounded-md object-cover"
        />
        <CardTitle>{company}</CardTitle>
      </CardHeader>


      <CardContent className="mt-2 flex items-center gap-2 text-xs p-0">
          {
            technologie.map((techno, idx) => (
              <Badge key={idx}>{techno}</Badge>
            ))
          }
      </CardContent>

    </Card>
  )
}