import { useFetchProject, useFetchProjects } from '@/api'
import { CreatePageForm } from '@/components/Forms/CreatePageForm'
import { CreateProjectForm } from '@/components/Forms/CreateProjectForm'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { stringToDateConverter } from '@/lib'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = Route.useParams()
  const { data } = useFetchProject(projectId)

  return (
    <Dialog open modal={false}>
      <DialogContent
        showCloseButton={false}
        className="bg-white flex flex-col mx-auto p-3 fixed inset-0 left-1/2 top-1/2 w-full h-full !max-h-[calc(100%-15rem)]  !max-w-[calc(100%-10rem)]"
      >
        <DialogHeader>
          <DialogTitle className=" flex flex-col gap-2 w-full">
            <p className="text-center">{`${data?.title}. Последнее обновление: ${stringToDateConverter(data?.updated_at)} `}</p>
            <div className="h-[2px] rounded-[50px] bg-black"></div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col shadow-2xl shadow-gray-500 p-5 rounded-[10px] gap-5">
          <CreatePageForm
            project_id={projectId}
            formClassName="flex flex-col gap-3"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
