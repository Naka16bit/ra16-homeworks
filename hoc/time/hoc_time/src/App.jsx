import React, {useState} from 'react';
import moment from "moment";

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function withDateTimePretty(Component) {
  return function (props) {
    let formatedDate;
    const todayDate = moment("2018-03-03 12:20:00");
    const difDatesMin = todayDate.diff(props.date, "minutes");
    const difDatesH = todayDate.diff(props.date, "hours");
    const difDatesD = todayDate.diff(props.date, "days");
    if (difDatesMin < 60) {
      formatedDate = difDatesMin + " мин. назад";
    } else if (difDatesH < 24) {
      formatedDate = difDatesH + " ч. назад";
    } else {
      formatedDate = difDatesD + " дн. назад";
    }
    return <Component {...props} date={formatedDate} />;
  }
}

const DateTimePretty = withDateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 08:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}