import React, { useState } from "react";
import Style from './Attendancepage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

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

const Forms = () => {
    const [value, setValue] = useState({
        fullname: '',
        year: '',
        section: '',
        email: '',
        reason: '',
        fromdate: '',
        todate: ''
    });

    const handlechange = (e) => {
        setValue({ ...value, [e.target.name]: [e.target.value] })
    }

    const handlesubmit = async () => {
        try {
            const resp = await axios.post("http://localhost:3000/facultydashboard", value);
            if (resp.status === 200) {
                alert("Form has submitted");
            }
        }
        catch (error) {
            console.log("ERROR OF POST REQUEST:", error);
        }

    }
    return (
        <>
            <form onSubmit={handlesubmit} className={Style.container}>
                <label>Name:<input type="text" placeholder="Enter your Name" name="fullname" value={value.fullname} onChange={(e) => handlechange(e)}></input></label>
                <label>Year:<input type="text" placeholder="Enter year in number" name="year" value={value.year} onChange={(e) => handlechange(e)}></input></label>
                <label>Section:<input type="text" placeholder="Enter your section" name="section" value={value.section} onChange={(e) => handlechange(e)}></input></label>
                <label>Email:<input type="email" placeholder="Enter your mail id" name="email" value={value.email} onChange={(e) => handlechange(e)}></input></label>
                <label>Reason:<textarea name="reason" placeholder="Enter your reason" value={value.reason} cols={60} rows={10} onChange={(e) => handlechange(e)}></textarea></label>
                <label>From Date:<input type="date" name="fromdate" value={value.fromdate} onChange={(e) => handlechange(e)}></input></label>
                <label>To Date:<input type="date" name="todate" value={value.todate} onChange={(e) => handlechange(e)}></input></label>
                <button className="btn btn-info" type="submit">Submit</button>
            </form>

        </>
    )
}


export default function Form() {
    return (<>
        <Sidebar />
        <div style={{ marginLeft: '300px' }}>
            <h1 style={{ fontWeight: 'bold' }}>Leave Request Form</h1>
            <div className="card" style={{ width: '500px', marginTop: '50px' }}>
                <Forms />
            </div>
        </div>
    </>)
}