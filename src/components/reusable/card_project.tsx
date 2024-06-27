import { FC, useState } from "react"
import { Badge } from "../ui/badge"
import noImage from '../../assets/img/no-image.png'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
type CardProjectProps = {
  technologie: Array<string>
  company: string
  image?: string
  description: string
}

export const CardProject: FC<CardProjectProps> = ({ image, company, technologie, description }) => {
  const [scale, setScale] = useState<number>(1)

  const handleZoomIN = () => {
    setScale((scale) => scale + 0.1)
  }

  const handleZoomOut = () => {
    setScale((scale) => scale - 0.1)
  }

  return (
    <Dialog>
      <Card className="block rounded-lg w-full p-4">
        <CardHeader className="p-1">
          <DialogTrigger asChild className="flex items-center justify-center">
            <img
              alt="image of project"
              src={image ? image : noImage}
              className="h-60 w-full rounded-md object-contain"
            />
          </DialogTrigger>

          <CardTitle>{company}</CardTitle>
        </CardHeader>
        <CardContent className="mt-2  text-xs p-0">
          <CardDescription>{description}</CardDescription>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {
              technologie.map((techno, idx) => (
                <Badge key={idx}>
                  {techno}
                </Badge>
              ))
            }
          </div>
        </CardContent>
      </Card>
      <DialogContent className="h-screen">
        <DialogHeader className=" z-50">
          <Button variant="outline" size="icon" onClick={handleZoomIN}>
            <PlusIcon className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <MinusIcon className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className='overflow-auto ' >
          <img
            src={image}
            alt={`image ${company}`}
            className='h-screen w-full cursor-move object-contain '
            style={{ transform: `scale(${scale}) `}}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}



