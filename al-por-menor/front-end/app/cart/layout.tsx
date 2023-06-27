import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

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

      <Footer />
    </>
  )
}
