function App() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Beatrice D'Lonsod</h1>

      <p className="text-lg text-gray-600 mb-6">
        Third year BSIT student at Cebu Institute of Technology – University.
      </p>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">About</h2>

        <p className="leading-7">
          I am a BS Information Technology student at Cebu Institute of
          Technology – University. I enjoy working on web development, software
          projects, and student organization activities. I like learning by
          building things and figuring out how to solve problems when something
          does not work.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Details</h2>

        <p>Course: BS Information Technology</p>
        <p>Year level: Third year</p>
        <p>School: Cebu Institute of Technology – University</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Things I like</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Building websites and software projects</li>
          <li>Designing and organizing creative work</li>
          <li>Working on student organization events</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Reach me</h2>

        <p>Beatrice D'Lonsod</p>
        <p>BSIT Student</p>
      </section>

      <hr className="my-6" />

      <footer>
        <p>Made for CSIT340.</p>
      </footer>
    </main>
  )
}

export default App