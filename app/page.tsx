import Header from './components/Header'

const Home = () => {
  return (
    <>
      <div className="m-auto w-full max-w-[1100px]">
        <header className="fixed h-[4rem] w-full max-w-[1100px] border border-green-500 bg-transparent px-2 md:h-[6rem] md:px-0">
          <Header />
        </header>

        <main className="border border-red-500">
          {/* MAIN CONTENT */}
          <section
            id="home"
            className="bg-section-gray min-h-screen pt-[6.5rem]"
          ></section>
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
