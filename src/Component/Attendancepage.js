import React, { useEffect, useState } from 'react'
import Style from './Attendancepage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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
    const[data,setData]=useState([]);
    const[attendance,setAttendance]=useState([]);
   
    useEffect(()=>{
        axios.get('database urls get')
        .then(res=>{
            setData(res.data)
            setAttendance(res.data.map((student)=>({//represent the checkbox initially to be false(unclicked) based on name and rollno
                studentName:student.name,
                rollno:student.rollno,
                present:false,
            })));
        })
        .catch((error)=>{console.log("GET method error",error)});
    },[]);

    const handlesubmit=()=>{
        axios.post("databaseurlpost",attendance)
        .then((Resp)=>{
            console.log(Resp.status);
        })
        .catch((error)=>{
            console.log("POST method error",error);
        })
    }

    const handlecheckbox=(rollno)=>{
        setAttendance((prevAttendance)=>prevAttendance.map((student)=>{
            student.rollno===rollno?{...student,present:!student.present}:student
        }))
    }

    return (
        <>
            <div id={Style.tab}>
                <table>
                    <tr>
                        <th>STUDENTNAME</th>
                        <th>ROLLNO</th>
                        <th>STATUS</th>
                    </tr>
                    {data.map((std) => (
                        <tr key={std.rollno}>
                            <td>{std.name}</td>
                            <td>{std.rollno}</td>
                            <td><input type='checkbox'
                            checked={attendance.find((student)=>student.rollno===std.rollno)?.present} onChange={()=>handlecheckbox(std.rollno)}></input></td>
                        </tr>))}
                </table>
                <button onClick={handlesubmit}>Save Attendance</button>
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