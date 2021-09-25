import React, { useState, useEffect } from "react"
import Header from "../../../components/header"
import UnderConsturcation from "../../../components/underConstruction"
const Seasion = () => {
    const [year, setYear] = useState("2021")
    const [season, setSeason] = useState("winter")
    const years = function (startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1980;
        while (startYear <= currentYear) {
            years.push(startYear++);
        }
        return years;
    }
    return (
        <>
            <Header title="Seasonal Anime" />
            <div className="season">
                <UnderConsturcation />
                {/* <div className="container">
                    <div className="d-flex justify-content-end">
                        <form className="d-flex">
                            <select value={season} onChange={e => setseason(e.target.value)} className="form-control me-2">
                                {
                                    ["Fall", "Summer", "Winter", "Spring"].map(season => {
                                        return (
                                            <option key={season} value={season}>
                                                {season}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <select value={season} onChange={e => setseason(e.target.value)} className="form-control">
                                {
                                    years(1975).map(season => {
                                        return (
                                            <option key={season} value={season}>
                                                {season}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </form>
                    </div>
                    <hr />
                </div> */}
            </div>
        </>
    )
}

export default Seasion
