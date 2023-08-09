import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body
    console.log(userId)
    if (!userId) {
      console.log('[CONVERSATION_ERROR]', 'Unauthorized')
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!configuration.apiKey) {
      console.log('[CONVERSATION_ERROR]', 'OpenAI API Key is not configuered')
      return new NextResponse('OpenAI API Key is not configuered', { status: 500 })
    }

    if (!messages) {
      console.log('[CONVERSATION_ERROR]', 'Message is required')
      return new NextResponse('Message is required', { status: 400 })
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-5-tuerbo',
      messages
    })
  } catch (error) {
    // console.log('[CONVERSATION_ERROR]', error)

    return new NextResponse('Inernal error111', { status: 500 })
  }
}
