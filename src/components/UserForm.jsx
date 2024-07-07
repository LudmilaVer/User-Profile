import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions';

const UserForm = ({ setUserInfo }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo({ name, status });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Редактировать информацию о пользователе</h2>
            <div>
                <label>Имя:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Статус:</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>
            <button type="submit">Сохранить</button>
        </form>
    );
};

const mapDispatchToProps = {
    setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);
