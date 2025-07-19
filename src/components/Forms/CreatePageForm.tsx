import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import type { TCreateProjectForm } from './CreateProjectFormProps'
import { usePostProject } from '@/api'
import { usePostPage } from '@/api/mutations/pageMutation'
import type { TCreatePageFormProps } from './CreatePageFormProps'

const formSchema = z.object({
  pageName: z.string().min(3).max(20),
})

export function CreatePageForm({
  formClassName,
  project_id,
}: TCreatePageFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageName: '',
    },
  })

  const { mutate } = usePostPage()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.pageName)

    mutate({
      title: values.pageName,
      slug: `/${values.pageName}`,
      project_id: Number(project_id),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formClassName}>
        <FormField
          control={form.control}
          name="pageName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Создать новую страницу</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите название страницы"
                  className="active:border-none shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Создать страницу</Button>
      </form>
    </Form>
  )
}
