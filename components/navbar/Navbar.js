import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HiOutlineSearch } from "react-icons/hi"
import { BiSun, BiMoon } from "react-icons/bi"
import { FaBars } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import Url from "./Url"
import Model from "../model"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className="bg-black">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <Image src="/logo.png" height="32" width="32" />
                                </a>
                            </Link>
                        </div>

                        <div className={isOpen ? "url show p-3" : "url hide"}>
                            <div className="d-flex justify-content-end d-md-none">
                                <button className="btn-icons" onClick={() => setIsOpen(false)}>
                                    <MdClose />
                                </button>
                            </div>
                            <ul className="list-unstyled">
                                <Url href="/" label="home" />
                                <Url href="/anime" label="anime" />
                                <Url href="/manga" label="Manga" />
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" id="seasonDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Season
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="seasonDropdown">
                                        <li>
                                            <Link href="/anime/season">
                                                <a className="dropdown-item" >Anime Season</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a className="dropdown-item" >Manga Season</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>


                        <div className="list-button">
                            {/* <button type="button" className="btn-icons toggole-light-dark">
                                <BiMoon />
                            </button> */}
                            <button type="button" className="btn-icons btn-search" data-bs-toggle="modal" data-bs-target="#searchModel">
                                <HiOutlineSearch />
                            </button>
                            <button type="button" className="btn-icons btn-open" onClick={() => setIsOpen(true)} >
                                <FaBars />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Model />
        </>
    )
}

export default Navbar
