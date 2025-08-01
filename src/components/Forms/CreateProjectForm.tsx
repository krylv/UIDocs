import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import type { TCreateProjectForm } from './CreateProjectFormProps'
import { usePostProject } from '@/api'

const formSchema = z.object({
  projectName: z.string().min(3).max(10),
})

export function CreateProjectForm({ formClassName }: TCreateProjectForm) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
    },
  })

  const { mutate } = usePostProject()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({ title: values.projectName, slug: `/${values.projectName}` })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formClassName}>
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Создать новый проект</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите название проекта"
                  className="active:border-none shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Создать проект</Button>
      </form>
    </Form>
  )
}
