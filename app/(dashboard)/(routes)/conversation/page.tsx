'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import axios from 'axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ChatCompletionRequestMessage } from 'openai'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import Heading from '@/components/Heading'
import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import UserAvatar from '@/components/UserAvatar'
import BotAvatar from '@/components/BotAvatar'

import { formSchema } from './constans'
import { cn } from '@/lib/utils'
import { useProModal } from '@/hooks/useProModal'
import { toast } from 'react-hot-toast'

const CoversationPage = () => {
  const router = useRouter()
  const proModal = useProModal()

  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ''
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: value.prompt
      }

      const newMessages = [...messages, userMessage]
      const response = await axios.post('/api/conversation', {
        messages: newMessages
      })
      setMessages((current) => [...current, userMessage, response.data])

      form.reset()
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen()
      } else {
        toast.error(error?.message || 'Something went wrong.')
      }
      console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl>
                      <Input
                        className="bg-gray-100 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent placeholder:text-gray-300"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2" disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && <Empty label="No conversation started." />}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  'p-8 w-full flex items-start gap-x-8 rounded-r-lg',
                  message.role === 'user' ? 'bg-white border border-black/10' : 'bg-muted'
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoversationPage
