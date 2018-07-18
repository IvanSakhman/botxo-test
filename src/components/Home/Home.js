import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './Home.scss';

import Tutorial from './../Tutorial';

class Home extends Component {
    state = {
        showModal: false
    };

    onOpenModal = () => {
        this.setState({
            showModal: true
        });
    };

    handleClose = () => {
        this.setState({
            showModal: false
        })
    };

    render() {
        return (
            <div>
                <Button onClick={this.onOpenModal} bsClass={styles.button}>Open Modal</Button>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Tutorial handleClose={this.handleClose}/>
                </Modal>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
