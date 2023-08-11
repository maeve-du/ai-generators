import Image from 'next/image'

interface Props {
  loadingMessage?: string
  loadingSubMessage?: string
}

const Loader = ({ loadingMessage = 'Genius is Thinking...', loadingSubMessage }: Props) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          fill
          src="/logo.png"
          alt="logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="text-sm text-muted-foreground">{loadingMessage}</p>
      {loadingSubMessage && <p className="text-sm text-muted-foreground">{loadingSubMessage}</p>}
    </div>
  )
}

export default Loader
