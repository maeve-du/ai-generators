import Image from 'next/image'

const Empty = ({ label }: { label: string }) => {
  return (
    <div className="h-full p-6 md:p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image
          fill
          src="/empty.png"
          alt="Empty state photo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text-muted-foreground text-sm text-center">{label}</div>
    </div>
  )
}

export default Empty
