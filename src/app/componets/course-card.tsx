import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  image: string
  instructor: string
  progress: number
  href: string
}

export function CourseCard({ title, description, image, instructor, progress, href }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[140px] w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4 mr-1" />
          <span>{instructor}</span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={href} className="w-full">
          <div className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center py-2 rounded-md text-sm font-medium">
            Continuar
          </div>
        </Link>
      </CardFooter>
    </Card>
  )
}

