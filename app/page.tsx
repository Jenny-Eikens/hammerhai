import Header from './components/Header'

const Home = () => {
  return (
    <>
      <div className="m-auto w-full max-w-[1400px]">
        <header className="fixed h-[4rem] w-full max-w-[1400px] border border-green-500 bg-transparent px-2 md:h-[10rem] md:px-0">
          <Header />
        </header>

        <main className="border border-red-500">
          {/* MAIN CONTENT */}
          <section
            id="home"
            className="bg-section-gray flex min-h-screen flex-col pt-[10.5rem]"
          >
            <div className="mt-auto pb-4">
              <button className="text-underline mx-auto flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-white text-4xl">
                {' '}
                &darr;
              </button>
            </div>
          </section>
          <section id="live"></section>
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
