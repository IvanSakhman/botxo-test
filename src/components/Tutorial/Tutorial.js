import React, {Component} from 'react';
import { Tab, Row, Col, Nav, NavItem, Button } from 'react-bootstrap';
import arrow from '../../assets/next.svg';
import styles from './Tutorial.scss';

import { tabs, tabsContent } from './../../constants/constants';

class Tutorial extends Component {
    renderTabs = () => {
        return tabs.map((item, i) => (
            <NavItem eventKey={item.eventKey} key={i}>
                <div className={styles.navItemContent}>
                    <div className={styles.numberOuterBlock}>
                        <div className={styles.numberInnerBlock}>
                            {item.eventKey}
                        </div>
                    </div>
                    <div className={styles.tabInfoBlock}>
                        <p className={styles.tabTitle}>{item.title}</p>
                        <p className={styles.tabDesc}>{item.desc}</p>
                    </div>
                    {
                        this.props.activeTab === item.eventKey ?
                            <div className={styles.tabArrow}>
                                <img className={styles.img} src={arrow} alt="arrow"/>
                            </div> : null
                    }
                </div>
            </NavItem>
        ))
    };

    renderTabsContent = () => {
        return tabsContent.map((item, itemIndex) => (
            <Tab.Pane eventKey={item.eventKey} key={itemIndex}>
                <div className={styles.tabContent}>
                    <div className={`${item.figure} ${this.props.tabsContent[itemIndex].activeColor}`}/>
                </div>
                <div className={styles.tabsCircleContainer}>
                    { item.colors.map((color, colorIndex) => (
                        <div key={colorIndex}
                            className={`${styles.tabsCircle} ${color === this.props.tabsContent[itemIndex].activeColor ? styles.tabsCircleActive : ''}`}
                            onClick={() => this.props.changeColor({ itemIndex, color })}
                        />
                    ))}
                </div>
            </Tab.Pane>
        ))
    };

    handleSelect = (activeTab) => {
        this.props.changeActiveTab(activeTab)
    };

    handleNextTab = () => {
        if (this.props.activeTab === '5') return;

        this.props.incrementActiveTab();
    };

    render() {
        return (
            <div className={styles.tutorial}>
                <h2 className={styles.title}>What do you need to know to create a Bot?</h2>
                <p className={styles.info}>Follow the numbers of this tutorial</p>

                <Tab.Container
                    id="tabs-with-dropdown"
                    activeKey={this.props.activeTab}
                    onSelect={this.handleSelect}
                >
                    <Row className="clearfix">
                        <Col sm={4}>
                            <Nav bsStyle="tabs">
                                {this.renderTabs()}
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                {this.renderTabsContent()}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

                <div className={styles.nav}>
                    <Button onClick={this.props.handleClose} bsClass={`${styles.button}`}>Skip tutorial</Button>
                    <Button onClick={this.handleNextTab} bsClass={`${styles.button} ${styles.buttonNext}`}>Next</Button>
                </div>
            </div>
        );
    }
}

export default Tutorial;
