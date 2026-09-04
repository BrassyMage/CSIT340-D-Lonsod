function App() {
  return (
    <div
      style={{
        fontFamily: '"Times New Roman", Times, serif',
      }}
    >
      <header className="max-w-2xl px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Beatrice D'Lonsod
        </h1>

        <p className="mt-2 text-lg text-slate-600">
          Third year BSIT student at Cebu Institute of Technology – University.
        </p>

        <hr className="mt-8 border-slate-200" />
      </header>

      <main className="max-w-2xl px-6 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>

          <p className="leading-relaxed text-slate-700">
            I am a BS Information Technology student at Cebu Institute of
            Technology – University. I enjoy building websites, working on
            software projects, and learning new technologies. I also enjoy
            creative work and organizing student activities, especially when I
            get to turn ideas into something that actually works.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>

          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            School: Cebu Institute of Technology – University
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>

          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Building websites and software projects</li>
            <li>Designing and working on creative projects</li>
            <li>Organizing student events and activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>

          <p className="leading-relaxed text-slate-700">
            Beatrice D'Lonsod
            <br />
            BSIT Student
          </p>
        </section>
      </main>

      <section className="max-w-2xl px-6 pb-16">
        <hr className="mb-6 border-slate-200" />

        <p className="text-sm text-slate-500">
          Made for CSIT340.
        </p>
      </section>
    </div>
  );
}

export default App;