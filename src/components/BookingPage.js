import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust path as necessary
import { collection, getDocs } from 'firebase/firestore';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';

function BookingPage() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(''); // Initialize with an empty string
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const servicesCollection = await getDocs(collection(db, 'services'));
            setServices(servicesCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };

        fetchData();
    }, []);

    const handleBooking = () => {
        console.log('Selected Service:', selectedService);
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
    };

    return (
        <div>
            <h1>{t('bookingTitle')}</h1>

            {/* Service Selector */}
            <div>
                <label>{t('selectService')}</label>
                <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                    <option value="" disabled>{t('selectAService')}</option>
                    {services.map(service => (
                        <option key={service.id} value={service.id}>
                            {service.name[t('language')]}
                        </option>
                    ))}
                </select>
            </div>

            {/* Date Picker */}
            <div>
                <label>{t('selectDate')}</label>
                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            </div>

            {/* Time Picker */}
            <div>
                <label>{t('selectTime')}</label>
                <DatePicker
                    selected={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption={t('time')}
                    dateFormat="h:mm aa"
                />
            </div>

            <button onClick={handleBooking}>{t('bookNow')}</button>
        </div>
    );
}

export default BookingPage;
