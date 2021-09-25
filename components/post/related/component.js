import Link from "next/link"
const Component = ({ data, title }) => {
    return (
        <div>
            <h5>{title}</h5>
            <hr />
            <ul className="ms-3 list-unstyled">
                {
                    data.map(d => {
                        return (
                            <li key={d.mal_id}>
                                <Link href={`/anime/${d.mal_id}`}>
                                    <a className="text-info text-decoration-none">
                                        {d.name}
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Component
