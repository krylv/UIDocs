import { QUERY_KEYS } from '@/constants'
import { queryClient } from '@/lib/react-query'
import { useMutation } from '@tanstack/react-query'

const deleteProjectAPI = async (projectId: number) => {
  const res = await fetch(`http://localhost:4200/api/projects/${projectId}`, {
    method: 'DELETE',
  })
  if (!res.ok) {
    throw new Error('Failed delete project')
  }
  if (res.status === 204) {
    console.log('Success delete project')
  }
}

export const useDeleteProject = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_PROJECT],
    mutationFn: deleteProjectAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PROJECTS] })
    },
    onError: () => {
      console.error('Failed delete project')
    },
  })
}
