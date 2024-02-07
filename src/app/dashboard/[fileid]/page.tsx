import { notFound, redirect } from 'next/navigation'
import ChatWrapper from './components/chat/ChatWrapper'
import PdfRenderer from './components/PdfRenderer'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { db } from '@/db'

interface PageProps {
  params: {
    fileid: string
  }
}

export default async function Page({ params }: PageProps) {
  const { fileid } = params

  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  })
  if (!file) notFound()

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <PdfRenderer url="https://utfs.io/f/c42e7e83-38fe-43ea-abf7-cbf6868ef477-uhu4vd.pdf" />
          </div>
        </div>

        <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <ChatWrapper fileId={file.id} isSubscribed />
        </div>
      </div>
    </div>
  )
}
