'use client'
import Header from './components/Header'
import Live from './components/Live/Live'
import Sidebar from './components/Sidebar'
import { useRef, useState, useEffect } from 'react'

const Home = () => {
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }

    updateHeaderHeight()

    if (!window === undefined) {
      window.addEventListener('resize', updateHeaderHeight)
      return () => window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  )

  return (
    <>
      <div className="m-auto w-full max-w-[1600px]">
        <header
          ref={headerRef}
          className="sticky top-0 z-100 h-max max-h-[200px] w-full border border-green-500 bg-transparent bg-white px-1 md:px-0 md:py-2"
        >
          <Header />
        </header>

        <main className="border border-red-500">
          {/* MAIN CONTENT */}
          <section
            id="home"
            className="relative flex min-h-max flex-col border border-blue-500 bg-white"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Sidebar />
            <a
              href="#live"
              className="mx-auto mt-auto mb-4 hidden h-[4rem] w-[4rem] items-center justify-center rounded-full bg-white shadow-xl transition-all ease-out hover:scale-[1.2] hover:cursor-pointer md:flex"
            >
              <span className="text-underline scale-150">{downArrow}</span>
            </a>
          </section>
          <section
            id="live"
            className="bg-section-gray min-h-max p-8"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Live />
          </section>
          <section id="merch" className="bg-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            illum laudantium tempore inventore quas dolorem, debitis nobis
            dignissimos aperiam ipsa ipsam pariatur nesciunt cumque omnis dolor
            corrupti magni? Illum optio veniam ipsa facere explicabo iusto
            dignissimos aliquam quo, magnam voluptas corporis quisquam,
            laudantium consectetur aperiam provident, nihil natus! Commodi
            voluptatum dignissimos a aut! Magni, a quasi excepturi nulla autem
            laudantium perspiciatis sequi ut repudiandae quia cumque iusto minus
            modi, deserunt optio, neque cupiditate ea ipsa sapiente beatae
            impedit! Harum modi accusamus ex libero architecto tempore fuga a
            ipsam expedita, debitis laboriosam quisquam labore officia veritatis
            quo laborum voluptatem pariatur aliquam! Totam eum tempore doloribus
            officia error in iusto, placeat veritatis eos distinctio blanditiis
            optio, quia animi suscipit ex repellat modi corporis? Assumenda eius
            rerum cum culpa accusantium officiis esse, voluptates minus aliquam
            temporibus deserunt corrupti perferendis harum hic veritatis saepe
            quae ab sequi odit necessitatibus. Repellendus, porro voluptates
            earum odit soluta eum similique dolore a error ipsam commodi
            possimus cum pariatur fugit asperiores consequuntur laudantium
            repudiandae blanditiis. Velit, consequuntur? Ratione sit eaque
            voluptates, necessitatibus quos, quibusdam non illo error porro,
            alias rerum voluptatem. Minus fugiat pariatur cum ab ipsum ipsa quae
            distinctio tempora modi unde, dolore non culpa laborum! Repellendus
            impedit sunt modi tenetur vitae necessitatibus cupiditate molestiae.
            Itaque libero doloribus voluptatibus eos neque dicta, fugiat
            accusantium molestias harum! Rerum sit voluptate dolores reiciendis!
            Reiciendis, soluta repellendus suscipit ad deleniti quo debitis
            molestias, laudantium veritatis dolorem architecto ducimus, unde
            expedita praesentium? Labore excepturi, ipsam mollitia possimus esse
            dolor itaque quo iste voluptas illum eaque numquam consequuntur
            temporibus hic repudiandae? Magnam possimus minima porro, ex quod
            amet tenetur eos quia accusamus dicta. Voluptate doloribus illum
            praesentium accusamus molestias exercitationem recusandae dolorem
            laudantium, esse ipsa quam deserunt. Neque impedit unde eveniet esse
            iure itaque mollitia, sequi quis odit, nam delectus. Quia accusamus
            ipsam inventore dignissimos aut soluta similique aspernatur
            consequatur tenetur eius laudantium, porro doloremque necessitatibus
            consectetur illo, eum tempora molestiae. Numquam ipsa debitis
            adipisci cum facere eaque facilis aspernatur perspiciatis non et
            molestiae voluptate reprehenderit natus possimus, error repellendus
            repellat voluptatum ea sit iusto? Aperiam odit tempore, deleniti
            consequatur praesentium sequi! Officiis illo sint nostrum aliquid?
            Excepturi assumenda ipsam laborum provident exercitationem ullam
            asperiores sed quisquam adipisci libero. Harum, veritatis! Illum
            ipsum eius, consequatur odio rem aliquid maiores ipsam eveniet
            porro. Assumenda numquam quasi ipsam iure autem magni necessitatibus
            ipsum voluptatum laborum ab ad fugit, quibusdam corrupti illo omnis
            earum rem, eligendi molestias voluptatibus quidem nobis non
            reprehenderit! Omnis nesciunt magnam non aspernatur, molestiae natus
            numquam possimus rerum vitae ex inventore dolorem sunt animi neque
            minus temporibus necessitatibus nostrum quia doloremque beatae optio
            consectetur, error explicabo. Sequi ad recusandae similique fuga
            doloribus! Praesentium incidunt dolore delectus, animi rem dolor qui
            autem ratione nesciunt deleniti alias maiores dignissimos, commodi
            nihil, similique quas unde accusantium! Eum eligendi saepe a quae
            sapiente necessitatibus culpa illum molestias voluptates sit dicta
            molestiae mollitia ex minima, laboriosam consequuntur nostrum
            obcaecati dolorem deleniti autem! Debitis, fugit. Harum omnis nisi
            corrupti beatae sequi ullam rerum dolores consequuntur sit tempora?
          </section>
          <section id="about"></section>
          <section id="contact" className="bg-section-gray"></section>
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default Home
