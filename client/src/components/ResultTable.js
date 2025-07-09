import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

export default function ResultTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        })
    }, [])

  return (
    <div>
        <h3 className="table-title">🏆 Leaderboard - All Categories</h3>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Attempts</td>
                    <td>Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { data.length === 0 && <tr><td colSpan="5">No Data Found</td></tr>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>
                                <span className="category-pill">
                                    {v?.categoryName || v?.category || 'General'}
                                </span>
                            </td>
                            <td>{v?.attempts || 0}</td>
                            <td>
                                <span className="points-badge">
                                    {v?.points || 0}
                                </span>
                            </td>
                            <td>
                                <span className={`result-badge ${v?.achived === 'Passed' ? 'passed' : 'failed'}`}>
                                    {v?.achived || ""}
                                </span>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}