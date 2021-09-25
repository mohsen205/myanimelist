import Component from "./component.js"

const related = ({ data }) => {
    const key = ["Adaptation", "Side story", "Character", "Summary", "Alternative version"]
    return (
        <div>
            {
                key.map(k => {
                    return (
                        <div key={k}>
                            {
                                !data[k] ? null :
                                    <Component data={data[k]} title={k} />
                            }
                        </div>
                    )

                })
            }
        </div>
    )
}

export default related
