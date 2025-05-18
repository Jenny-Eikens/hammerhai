import Header from './components/Header'
import Sidebar from './components/Sidebar'

const Home = () => {
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
      <div className="m-auto w-full max-w-[1400px]">
        <header className="fixed z-100 h-max max-h-[200px] w-full max-w-[1400px] bg-transparent px-1 md:px-0 md:py-2">
          <Header />
        </header>

        <main>
          {/* MAIN CONTENT */}
          <section
            id="home"
            className="relative flex h-screen min-h-screen flex-col bg-white"
          >
            <Sidebar />
            <a
              href="#live"
              className="mx-auto mt-auto mb-4 hidden h-[4rem] w-[4rem] items-center justify-center rounded-full bg-white shadow-xl transition-all ease-out hover:scale-[1.2] hover:cursor-pointer md:flex"
            >
              <span className="text-underline scale-150">{downArrow}</span>
            </a>
          </section>
          <section id="live">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            officia modi officiis molestiae saepe tempore autem nesciunt
            voluptates voluptatibus quo excepturi eum perferendis delectus nobis
            neque hic praesentium asperiores deleniti dolorem, assumenda et
            quisquam. Incidunt nihil officia sunt, voluptatum commodi laborum
            dignissimos quibusdam magni, at culpa itaque omnis distinctio,
            beatae earum! Harum itaque officia recusandae illo quam, neque
            dolores mollitia delectus quia iusto illum quaerat possimus
            laudantium velit adipisci laboriosam vel at ipsam cupiditate, ad
            ipsa, vitae veritatis aut! Ipsam aut suscipit perspiciatis! Hic non
            repudiandae, pariatur, consequatur facere modi unde perferendis
            minus fugiat nulla officia cupiditate accusantium tempora eius?
          </section>
          <section id="merch" className="bg-section-gray"></section>
          <section id="about"></section>
          <section id="contact" className="bg-section-gray"></section>
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default Home
