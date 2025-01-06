import React from 'react'
import Style from './Attendancepage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
    return (
        <>
            <div className={Style.side}>
                <nav className={Style.inner}>
                    <p >Dashboard</p>
                    <p  >Mark Attendance</p>
                    <p >Leave Request</p>
                    <p >Report</p>
                </nav>
            </div>
        </>
    );
}

const Content = () => {
    const now = new Date();
    const yr = now.getFullYear();
    const mnt = now.getMonth() + 1;
    const dt = now.getDate();
    const hour = now.getHours() + ":" + now.getMinutes();
    const date = dt + "/" + mnt + "/" + yr;
    return (
        <>
            <h1 >MARK ATTENDANCE</h1>
            <h6>Period:<input type='text' placeholder='Enter subject code'></input></h6>
            <div className={Style.datetime}>
                <h6>Time:{hour.toString()}</h6>
                <h6>Date:{date.toString()}</h6>
            </div>
        </>
    )
}

const Table = () => {
    const data = [
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },
        { stdname: 'marlon', roll: 1 },

    ]

    return (
        <>
            <div id={Style.tab}>
                <table>
                    <tr>
                        <th>STUDENTNAME</th>
                        <th>ROLLNO</th>
                        <th>STATUS</th>
                    </tr>
                    {data.map((dt, index) => (
                        <tr key={index}>
                            <td>{dt.stdname}</td>
                            <td>{dt.roll}</td>
                            <td><input type='checkbox'></input></td>
                        </tr>))}
                </table>
            </div>
        </>)
}


export default function Attenpage() {
    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: '300px' }}>
                <Content />
                <div className='card' style={{ width: '800px', overflowY: 'auto', marginTop: '100px' }} >
                    <Table />
                    <h5 className='btn btn-info' style={{ width: '100px', marginLeft: '200px' }}>Save</h5>
                    <h5 className='btn btn-danger ' style={{ marginLeft: '400px', width: '100px', marginTop: '-45px' }}>Clear</h5>

                </div>
            </div>
        </>
    )
}