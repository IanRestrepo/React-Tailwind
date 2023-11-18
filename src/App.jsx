import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"


function App() {
  const [theme, setTheme] = useState("dark");
  
  const themeHandler = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="h-screen  dark:bg-slate-900 bg-white">
      <Navbar />
      <button className="bg-gray-950 px-4 py-2 text-white rounded-xl m-5" onClick={themeHandler}>{theme}</button>
    </div>
  )
}

export default App
