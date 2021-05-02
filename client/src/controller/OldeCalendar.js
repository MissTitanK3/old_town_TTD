import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { CalendarWrapper } from '../style/Wrapper';

export default function OldeCalendar() {
	const [value, onChange] = useState(new Date());
	console.log(value);

	const showEvents = () => {
		console.log('Clicked on a day to render a filtered list of events');
	};

	return (
		<CalendarWrapper>
			<Calendar
				className='calendar'
				onChange={onChange}
				value={value}
				onClickDay={showEvents}
				calendarType='US'
				showNeighboringMonth={false}
				prev2Label={false}
				next2Label={false}
			/>
		</CalendarWrapper>
	);
}
