import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="h-screen  dark:bg-slate-900 bg-white">
      <Navbar />
      <Hero
        userAge={16}
        userPhoto={"https://avatars.githubusercontent.com/u/91353384?v=4"}
        userRol={"FullStack Developer"}
        userSeniority={"Senior"}
        userName={"Ian Restrepo"}
      />
    </div>
  )
}

export default App
