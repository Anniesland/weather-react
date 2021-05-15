import './Newdate.css';

export default function Newdate(props) {
 
let date = new Date();

  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

  let months = [
    "Jan",
    "Feby",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
    if(currentDate < 10){currentDate ='0'+ currentDate;}
  let currentHours = date.getHours();
    if(currentHours < 10 ){currentHours ='0'+ currentHours;}
  let currentMinutes = date.getMinutes();
    if(currentMinutes < 10 ) {currentMinutes ='0' + currentMinutes; }

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div> <br /> <p>{currentDay}, {currentMonth} {currentDate}, </p> 
   <p> {currentHours}:{currentMinutes}  </p> </div> );
}
