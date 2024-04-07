import { FC } from "react"
import { Badge } from "../ui/badge"
import noImage from '../../assets/img/no-image.png'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
type CardProjectProps = {
  technologie: Array<string>
  company: string
  image?: string
  logo: Array<string>
}

export const CardProject: FC<CardProjectProps> = ({ image, company, technologie, logo }) => {
  return (
    <Card className="block rounded-lg w-76 p-4">
      <CardHeader className="p-1">
        <div className="flex items-center justify-center">
          <img
            alt="image of project"
            src={image ? image : noImage}
            className="h-60 w-60 rounded-md object-cover"
          />
        </div>
        
        <CardTitle>{company}</CardTitle>
      </CardHeader>


      <CardContent className="mt-2 flex items-center gap-2 text-xs p-0">
          {
            technologie.map((techno, idx) => (
              <Badge key={idx}>
                <img src={logo[idx]} alt="logo of technologie" width={16} height={16} className="mr-2 "/>
                {techno}
              </Badge>
            ))
          }
      </CardContent>

    </Card>
  )
}