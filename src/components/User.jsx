import React from 'react';
import { connect } from 'react-redux';

const User = ({ name, status }) => {
    return (
        <div>
            <h1>Профиль пользователя</h1>
            <div>
                <h2>Информация о пользователе</h2>
                <p>Имя: {name}</p>
                <p>Статус: {status}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    name: state.name,
    status: state.status,
});

export default connect(mapStateToProps)(User);
