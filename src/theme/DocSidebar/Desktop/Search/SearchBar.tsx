import React, { Component } from 'react';
import SearchModal from './SearchModal';
import './styles.searchbar.css';


class SearchBar extends Component {
    state: { show: boolean; };

    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render = () => {
        return (
            <>
                <SearchModal show={this.state.show} handleClose={this.hideModal} /> 
                <button className='search-bar' onClick={this.showModal}>
                    Search documentation...
                    <div className='hotkey'>CtrlK</div>
                </button>
            </>
        );

    }
}

export default SearchBar;