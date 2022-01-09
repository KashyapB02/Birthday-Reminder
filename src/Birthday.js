import React, { useState } from 'react';
import './Birthday.css';

import Trash from './assets/TrashIcon.svg';

function Birthday({avatar, name, age, deleted}) {

    const [idValue, clearBirthday] = useState("");

    function birthdayHandler() {

        clearBirthday("Birthday");
        deleted(name);
    }


    return (
        
        <div id={idValue} className="Birthday">
            <span className='image'>
                <img className='avatar' src={avatar} alt={name} title={name} />
            </span>

            <div className="name-age">
                <div className="name">{name}</div>
                <div className="age">{age}</div>
            </div>

            <span className="deleteBirthday">
                <button onClick={birthdayHandler}>
                    <img class="TrashImage" src={Trash} alt='X' />
                </button>
            </span>
        </div>
    )
}

export default Birthday
