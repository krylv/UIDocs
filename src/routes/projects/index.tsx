import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, type MouseEvent } from 'react'
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
import { useFetchProjects } from '@/api'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const navigate = useNavigate()
  const { data, isLoading, error } = useFetchProjects()

  return (
    <Dialog open modal={false}>
      <DialogContent
        showCloseButton={false}
        className="bg-white mx-auto fixed inset-0 left-1/2 top-1/2 w-full h-full !max-h-[calc(100%-15rem)]  !max-w-[calc(100%-10rem)]"
      >
        <div className="grid grid-rows-[auto_1fr] h-full gap-8">
          <DialogHeader className="flex flex-col shadow-2xl shadow-gray-500 p-5 rounded-[10px] gap-5">
            <DialogTitle className="font-marker">
              Управление проектами
            </DialogTitle>
            <DialogDescription asChild>
              <div className="flex flex-col">
                <CreateProjectForm formClassName="flex flex-col gap-3" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogHeader className="grid grid-rows-[auto_1fr] max-h-[37dvh] desktop:max-h-[43dvh]  h-auto gap-5 shadow-2xl drop-shadow-2xl shadow-gray-500 p-5 rounded-[10px] ">
            <DialogTitle className="font-marker">
              Существующие проекты
            </DialogTitle>
            <DialogDescription
              asChild
              className="max-h-[27dvh] desktop:max-h-[35dvh] overflow-auto"
            >
              <div className=" flex-col  flex gap-2">
                {data?.map((project) => (
                  <ProjectCard
                    key={project.id}
                    onClick={() => {
                      navigate({
                        to: '/projects/$projectId',
                        params: { projectId: project.id, title: project.title },
                      })
                    }}
                    projectId={project.id}
                    title={project.title}
                    className="bg-white border-1 border-black text-black "
                  />
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  )
}
