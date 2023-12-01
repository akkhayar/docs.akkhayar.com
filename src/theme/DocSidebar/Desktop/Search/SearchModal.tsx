import React from 'react';
// import './styles.module.css';

export default function SearchModal({ handleClose, show }) {
    const showHideClassName = show ? "block" : "hidden";

    return (
        <div className={showHideClassName}>
            <section className='search-modal'>
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    );
}
