import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CreateProjectForm } from '@/components/Forms/CreateProjectForm'
import { ProjectCard } from '@/components/ProjectCard/ProjectCard'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const navigate = useNavigate()
  return (
    <Dialog open modal={false}>
      <DialogContent
        showCloseButton={false}
        className="bg-white mx-auto fixed inset-0 left-1/2 top-1/2 w-full h-full !max-h-[calc(100%-15rem)]  !max-w-[calc(100%-10rem)]"
      >
        <div className="flex flex-col gap-10">
          <DialogHeader className="flex flex-col shadow-2xl shadow-gray-500 p-5 rounded-[10px] gap-5">
            <DialogTitle className="font-marker">
              Управление проектами
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-col">
                <CreateProjectForm formClassName="flex flex-col gap-3" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogHeader className="flex flex-col gap-5 shadow-2xl drop-shadow-2xl shadow-gray-500 p-5 rounded-[10px] h-full">
            <DialogTitle className="font-marker">
              Существующие проекты
            </DialogTitle>
            <DialogDescription>
              <div className=" flex-col">
                <ProjectCard
                  onClick={() =>
                    navigate({
                      to: '/projects/$projectId',
                    })
                  }
                  title="Test Project"
                  className="bg-white border-1 border-black text-black "
                />
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  )
}
