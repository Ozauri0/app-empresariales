import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Calendar, FileText, GraduationCap, Home, MessageSquare, Settings, Users } from "lucide-react"
import Link from "next/link"

export function SiteSidebar() {
  return (
    <aside className="hidden border-r bg-background md:block md:w-[240px] lg:w-[280px]">
      <ScrollArea className="py-6 pr-6 lg:py-8">
        <div className="flex flex-col gap-4 px-4">
          <div className="grid gap-1">
            <h3 className="text-sm font-medium text-muted-foreground px-2">Principal</h3>
            <div className="grid gap-1">
              <Button variant="ghost" asChild className="justify-start gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start gap-2">
                <Link href="/cursos">
                  <BookOpen className="h-4 w-4" />
                  Mis Cursos
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start gap-2">
                <Link href="/calendario">
                  <Calendar className="h-4 w-4" />
                  Calendario
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start gap-2">
                <Link href="/tareas">
                  <FileText className="h-4 w-4" />
                  Tareas
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm font-medium text-muted-foreground px-2">Comunicación</h3>
            <div className="grid gap-1">
              <Button variant="ghost" asChild className="justify-start gap-2">
                <Link href="/mensajes">
                  <MessageSquare className="h-4 w-4" />
                  Mensajes
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start gap-2">
                <Link href="/foros">
                  <Users className="h-4 w-4" />
                  Foros
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm font-medium text-muted-foreground px-2">Mis Cursos</h3>
            <div className="grid gap-1">
              <Button variant="ghost" asChild className="justify-start gap-2 text-left">
                <Link href="/cursos/intro-programacion">
                  <GraduationCap className="h-4 w-4 shrink-0" />
                  <span className="truncate">Introducción a la Programación</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start gap-2 text-left">
                <Link href="/cursos/gestion-proyectos">
                  <GraduationCap className="h-4 w-4 shrink-0" />
                  <span className="truncate">Gestión de Proyectos</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start gap-2 text-left">
                <Link href="/cursos/analisis-datos">
                  <GraduationCap className="h-4 w-4 shrink-0" />
                  <span className="truncate">Análisis de Datos</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm font-medium text-muted-foreground px-2">Configuración</h3>
            <div className="grid gap-1">
              <Button variant="ghost" asChild className="justify-start gap-2">
                <Link href="/configuracion">
                  <Settings className="h-4 w-4" />
                  Configuración
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}

