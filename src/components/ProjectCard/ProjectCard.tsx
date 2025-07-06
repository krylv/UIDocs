import type { TProjectCard } from './ProjectCardProps'
import Edit from '@/assets/svg/Edit.svg?react'
import Delete from '@/assets/svg/Delete.svg?react'

export const ProjectCard = ({
  className,
  title,
  onClick,
  onDeleteClick,
  onEditClick,
}: TProjectCard) => {
  return (
    <div onClick={onClick} className={`${className} flex p-3 justify-between`}>
      <p>{title}</p>
      <div className="flex gap-3">
        <Edit className="size-[16px] cursor-pointer" />
        <Delete className="size-[16px] cursor-pointer" />
      </div>
    </div>
  )
}
