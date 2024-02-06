import React from 'react'

const Table = ({data}) => {
  return (
    <div>
        <table className='tablelb'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Calories burnt</th>
                    <th>Rank</th>
                </tr>
                    {data && data.map((item)=>(
                    <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.calories}</td>
                    <td>{item.rank}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table