import Link from "next/link"
import { RiTwitterLine, RiInstagramLine, RiRedditLine } from "react-icons/ri"
import { FiFacebook } from "react-icons/fi"
const Footer = () => {
    return (
        <footer className="bg-black py-3 mt-4">
            <div className="container">
                <div className="row pt-1">
                    <div className="col-md-8">
                        <div className="d-flex justify-content-center">
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/">
                                        <a className=" text-white text-decoration-none">
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/anime">
                                        <a className=" text-white text-decoration-none">
                                            Anime
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/manga">
                                        <a className=" text-white text-decoration-none">
                                            Manga
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className=" text-white text-decoration-none">
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a className=" text-white text-decoration-none">
                                            Contact
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/termAndPrivacy">
                                        <a className=" text-white text-decoration-none">
                                            Privacy Policy
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/">
                                        <a className="text-white text-decoration-none fs-4" target="_blank">
                                            <RiTwitterLine />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a className="text-white text-decoration-none fs-4" target="_blank">
                                            <FiFacebook />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a className="text-white text-decoration-none fs-4" target="_blank">
                                            <RiInstagramLine />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a className="text-white text-decoration-none fs-4" target="_blank">
                                            <RiRedditLine />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center pt-1">
                    &copy;Copyright, all rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
