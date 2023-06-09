import Header from '@/components/ui/header'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (

    
    <>
      <main className="grow">
            <Header />

        {children}

      </main>
    </>
  )
}