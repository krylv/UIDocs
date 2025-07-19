import { QUERY_KEYS } from '@/constants'
import { queryClient } from '@/lib'
import { useMutation } from '@tanstack/react-query'

interface PageBody {
  title: string
  slug: string
  project_id: number
}

interface Page {
  id: number
  project_id: number
  title: string
  slug: string
  created_at: Date
  updated_at: Date
}

const postPageAPI = async (page: PageBody): Promise<Page> => {
  const res = await fetch('http://localhost:4200/api/pages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(page),
  })
  if (!res.ok) {
    throw new Error('Failed to post page')
  }
  const data = await res.json()
  return data
}

export const usePostPage = () => {
  return useMutation<Page, Error, PageBody>({
    mutationKey: [QUERY_KEYS.POST_PAGE],
    mutationFn: postPageAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PROJECTS] }) //TODO сделать инвалидацию запроса при запросе
    },
    onError: (error) => {
      console.error('Project creation failed:', error)
    },
  })
}
