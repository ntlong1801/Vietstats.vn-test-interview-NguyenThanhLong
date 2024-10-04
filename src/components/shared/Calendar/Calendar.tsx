'use client';

// import 'react-calendar/dist/Calendar.css';
import './index.scss';

import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarCustom = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [value, setValue] = useState<Value>(new Date());

  return <Calendar onChange={e => setValue(e)} value={value} />;
};

export default CalendarCustom;
