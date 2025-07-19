import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants'
export interface Project {
  id: number
  title: string
  slug: string
  created_at: string
  updated_at: string
}

const getProjects = async () => {
  const res = await fetch('http://localhost:4200/api/projects')
  const data = await res.json()
  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
  return data
}

const getProject = async (projectId: number) => {
  try {
    const res = await fetch(`http://localhost:4200/api/projects/${projectId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    if (!res.ok) {
      throw new Error('Failed to get project')
    }
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const useFetchProjects = () => {
  return useQuery<Project[]>({
    queryKey: [QUERY_KEYS.GET_PROJECTS],
    queryFn: getProjects,
  })
}

export const useFetchProject = (projectId: number) => {
  return useQuery<Project>({
    queryKey: [QUERY_KEYS.GET_PROJECT, projectId],
    queryFn: () => getProject(projectId),
  })
}
