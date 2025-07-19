import { QUERY_KEYS } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import type { Project } from '../queries/projectQuery'
import { queryClient } from '@/lib/react-query'

interface ProjectBody {
  title: string
  slug: string
}

const postProjectAPI = async (project: ProjectBody): Promise<Project> => {
  const res = await fetch('http://localhost:4200/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  })
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

export const usePostProject = () => {
  return useMutation<Project, Error, ProjectBody>({
    mutationKey: [QUERY_KEYS.POST_PROJECT],
    mutationFn: postProjectAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PROJECTS] })
    },
    onError: (error) => {
      console.error('Project creation failed:', error)
    },
  })
}
