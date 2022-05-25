import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import './index.css';

const Header = ({ type }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOptions = (optionName, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [optionName]:
          operation === 'increase'
            ? options[optionName] + 1
            : options[optionName] - 1,
      };
    });
  };

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            {' '}
            <h1 className='headerTitle'>
              A lifetime of discounts? It's Genius.
            </h1>
            <p className='headerDescription'>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className='headerBtn'>Sign in / register</button>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDay} className='headerIcon' />
                <span
                  className='headerSearchText'
                  onClick={() => setOpenCalendar(!openCalendar)}
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                  />
                )}
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span
                  className='headerSearchText'
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult ∘ ${options.children} children ∘ ${options.room} room`}</span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>Adult</span>
                      <button
                        className='optionCounterButton'
                        onClick={() => handleOptions('adult', 'decrease')}
                        disabled={options.adult <= 1}
                      >
                        -
                      </button>
                      <span className='optionCounterNumber'>
                        {options.adult}
                      </span>
                      <button
                        className='optionCounterButton'
                        onClick={() => handleOptions('adult', 'increase')}
                      >
                        +
                      </button>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Children</span>
                      <button
                        disabled={options.children <= 0}
                        className='optionCounterButton'
                        onClick={() => handleOptions('children', 'decrease')}
                      >
                        -
                      </button>
                      <span className='optionCounterNumber'>
                        {options.children}
                      </span>
                      <button
                        className='optionCounterButton'
                        onClick={() => handleOptions('children', 'increase')}
                      >
                        +
                      </button>
                    </div>

                    <div className='optionItem'>
                      <span className='optionText'>Room</span>
                      <button
                        className='optionCounterButton'
                        onClick={() => handleOptions('room', 'decrease')}
                        disabled={options.adult <= 1}
                      >
                        -
                      </button>
                      <span className='optionCounterNumber'>
                        {options.room}
                      </span>
                      <button
                        className='optionCounterButton'
                        onClick={() => handleOptions('room', 'increase')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerBtn'>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
