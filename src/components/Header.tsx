import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 static w-full flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold flex gap-3">
          <Link to="/">Главная</Link>
          <span>|</span>
          <Link to="/projects">Проекты</Link>
        </div>
      </nav>
    </header>
  )
}
