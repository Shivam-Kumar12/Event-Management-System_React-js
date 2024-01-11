import React from 'react'
import InputField from '../shared/InputField/InputField'
import './AddEvent.css'
const AddEvent = () => {
  const eventTypeList = ['rgdrgdg','esrfsfes','efsefsfe'];
  return (
    <div className='addevent-body'>

<form className='addevent-form'>

<h3> Add Event</h3>
<br /><br />
<InputField id='ename' cutWidth={90} type='text' label='Event Name' />
<br />
<InputField id='eventList' listData={eventTypeList} cutWidth={90} type='list' label='Event List' />
<button className='addevent-btn'   style={{marginBottom:40}}>Add Event</button>

</form>
</div>
  )
}

export default AddEvent

