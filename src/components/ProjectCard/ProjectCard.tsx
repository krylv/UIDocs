import type { TProjectCard } from './ProjectCardProps'
import Edit from '@/assets/svg/Edit.svg?react'
import Delete from '@/assets/svg/Delete.svg?react'
import { useDeleteProject } from '@/api'
import type { MouseEvent } from 'react'

export const ProjectCard = ({
  className,
  title,
  onClick,
  projectId,
}: TProjectCard) => {
  const mutation = useDeleteProject()

  const handleDeleteProject = (
    projectId: number,
    e: MouseEvent<SVGSVGElement>,
  ) => {
    e.stopPropagation()
    mutation.mutate(projectId)
  }
  return (
    <div onClick={onClick} className={`${className} flex p-3 justify-between`}>
      <span>{title}</span>
      <div className="flex gap-3">
        <Edit className="size-[16px] cursor-pointer" />
        <Delete
          className="size-[16px] cursor-pointer"
          onClick={(e) => handleDeleteProject(projectId, e)}
        />
      </div>
    </div>
  )
}
