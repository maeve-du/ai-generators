import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const testimonials = [
  {
    name: 'Joel',
    avatar: 'J',
    avatarColor: 'bg-teal-600',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    name: 'Antonio',
    avatar: 'A',
    avatarColor: 'bg-lime-700',
    title: 'Designer',
    description: 'I use this daily for generating new photos!'
  },
  {
    name: 'Mark',
    avatar: 'M',
    avatarColor: 'bg-violet-600',
    title: 'CEO',
    description: 'This app has changed my life, cannot imagine working without it!'
  },
  {
    name: 'Mary',
    avatar: 'M',
    avatarColor: 'bg-blue-700',
    title: 'CFO',
    description: 'The best in class, definitely worth the premium subscription!'
  }
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Tesimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader className="flex items-center gap-x-2">
              <CardTitle className="flex justify-items-start gap-x-3 px-0 w-full">
                <div
                  className={cn(
                    'grid justify-center items-center w-12 h-12 rounded-full text-base text-white/50',
                    item.avatarColor
                  )}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent
