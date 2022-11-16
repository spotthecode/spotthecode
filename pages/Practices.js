import Link from "next/link"
import style from '../styles/practices.module.css'

const Practices = () => {
  return (
    <>

    {/* practice bar */}
    <div className={style.bar}>
    <Link href="/practices/HTML">HTML</Link>
    <Link href="/practices/CSS">CSS</Link>
    <Link href="/practices/JavaScript">JavaScript</Link>
    <Link href="/practices/Python">Python</Link>
    <Link href="/practices/C">C</Link>
    <Link href="/practices/CPP">C++</Link>
    <Link href="/practices/Java">Java</Link>
    <Link href="/practices/DSA">DSA</Link> 
    <Link href="/practices/SQL">SQL</Link>
    </div>
    </>
  )
}

export default Practices