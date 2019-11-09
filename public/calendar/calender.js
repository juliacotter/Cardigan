import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

document.assEventListener('DOMContentLoaded', function(){
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar(calendarEl, {
        plugins: [dayGridPlugin],
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
    });
    calendar.render();
});