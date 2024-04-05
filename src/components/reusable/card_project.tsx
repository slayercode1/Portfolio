import { FC } from "react"
import { Badge } from "../ui/badge"
import noImage from '../../assets/img/no-image.png'
type CardProjectProps = {
  technologie: Array<string>
  company: string
  image?: string
}

export const CardProject: FC<CardProjectProps> = ({ image, company, technologie }) => {
  return (
    <div onClick={() => {}} className="block rounded-lg cursor-pointer p-4 shadow-sm bg-white shadow-indigo-100 w-76">
      <img
        alt="image of project"
        src={image ? image : noImage}
        className="h-60 w-60 rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dd className="text-sm text-gray-500">{company}</dd>
          </div>
        </dl>

        <div className="mt-2 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            {
              technologie.map((techno) => (
                <Badge>{techno}</Badge>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}