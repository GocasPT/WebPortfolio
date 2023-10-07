import React from 'react';
import { EDUCATION_LIST } from '../../data/constants';
import './Education.css';

function Education() {
    return (
        <section className='education'>
            <h1>Education</h1>
            {EDUCATION_LIST.map(obj => (
                <div className="DEBUG">
                    <p>{obj.name} ({obj.acronym})</p>
                    <p>{obj.educationLevel} - {obj.educationAres}</p>
                    <p>{obj.yearsStart} to {obj.yearEnd}</p>
                </div>
            ))}
        </section>
    );
}

export default Education;