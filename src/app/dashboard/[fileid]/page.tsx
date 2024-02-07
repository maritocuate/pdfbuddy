import PdfRenderer from './components/PdfRenderer'

export default function Page() {
  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        <PdfRenderer url="https://utfs.io/f/c42e7e83-38fe-43ea-abf7-cbf6868ef477-uhu4vd.pdf" />
      </div>
    </div>
  )
}
