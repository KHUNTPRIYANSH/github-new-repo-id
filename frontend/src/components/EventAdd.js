import React, { useState } from 'react'

function EventAdd() {
    const [eventName,setEventName]=useState("");
    const [eventDate,setEventDate]=useState("");
    const [eventLocation,setEventLocation]=useState("");
    const [eventDetails,setEventDetails]=useState("");
    const [eventPoster,setEventPoster]=useState([]);
    const handleSubmit=()=>{

    }
    return (
        <div>
            <div className='mainEventForm'>
                <h1 className='e-title' style={{ textAlign: "center" ,marginBottom:"20px"}}>Add Events</h1>
                <form onSubmit={handleSubmit} className='event-form-f eventForm ' style={{alignItems:"unset",paddingTop:"50px"}}>
                    <div className='regi-field' style={{margin:"10px 0"}}>
                        <label htmlFor="eventName">Event  Name </label>
                        <input className='ip' type="text" name='eventName' onChange={(e)=>{setEventName(e.target.value)}} required={true} id='eventName' />
                    </div>
                    <div className='regi-field' style={{margin:"10px 0"}}>
                        <label htmlFor="eventDate">Event  Date</label>
                        <input className='ip' type="date" onChange={(e)=>{setEventDate(e.target.value)}} required={true} id='eventDate' />
                    </div>
                    <div className='regi-field' style={{margin:"10px 0"}}>
                        <label htmlFor="eventLocation">Event  Location</label>
                        <input className='ip' type="text" onChange={(e)=>{setEventLocation(e.target.value)}} required={true} id='eventLocation' />
                    </div>
                    <div className='regi-field' style={{margin:"10px 0"}}> 
                        <label htmlFor="eventPoster">Event  Poster</label>
                        <input className='ip' type="file" onChange={(e)=>{e.preventDefault(); setEventPoster(e.target.files[0])}} required={true} id='eventPoster' accept='image/*' />
                    </div>
                    <div className='regi-field' style={{margin:"10px 0"}}>
                        <label htmlFor="eventDetails" >Event  Details</label>
                        <textarea className='ip' name="eventDetails" onChange={(e)=>{setEventDate(e.target.value)}} required={true} id="eventDetails" cols="30" rows="10"></textarea>
                    </div>
                    <div style={{ display: "flex", marginBottom:"20px"}}>
                        <button className='btns' type='submit'>Add Event</button>
                        <button className='btns' type='reset' style={{ backgroundColor: "rgb(255, 43, 43)" }}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EventAdd
