import { useEffect } from "react"

const Loading = (p) => {
  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) p.setView('menu')
    else p.setView('login')
  }, [])

  return (
    <div></div>
  )
}

export default Loading