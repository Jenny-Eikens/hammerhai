const Home = () => {
  return (
    <>
      <div>
        <main className="m-auto min-h-[90vh] w-[90vw] max-w-[1100px]">
          {/* MAIN CONTENT */}
          <section id="home" className="bg-section-gray"><p>Hello world</p></section>
          <section id="live"></section>
          <section id="merch" className="bg-section-gray"></section>
          <section id="about"></section>
          <section id="contact" className="bg-section-gray"></section>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;