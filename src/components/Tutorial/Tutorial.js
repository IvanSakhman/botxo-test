import React, {Component} from 'react';
import { Tab, Row, Col, Nav, NavItem, Button } from 'react-bootstrap';
import arrow from '../../assets/next.svg';
import styles from './Tutorial.scss';

import { tabs } from './../../constants/constants';

class Tutorial extends Component {
    state = {
        activeTab: '1',
        tabsContent: [
            {
                eventKey: '1',
                figure: 'square',
                activeColor: 'red',
                colors: ['red', 'blue', 'green', 'yellow', 'pink']
            },
            {
                eventKey: '2',
                figure: 'circle',
                activeColor: 'red',
                colors: ['red', 'blue', 'green', 'yellow', 'pink']
            },
            {
                eventKey: '3',
                figure: 'rectangle',
                activeColor: 'red',
                colors: ['red', 'blue', 'green', 'yellow', 'pink']
            },
            {
                eventKey: '4',
                figure: 'oval',
                activeColor: 'red',
                colors: ['red', 'blue', 'green', 'yellow', 'pink']
            },
            {
                eventKey: '5',
                figure: 'parallelogram',
                activeColor: 'red',
                colors: ['red', 'blue', 'green', 'yellow', 'pink']
            },
        ]
    };

    renderTabs = () => {
        return tabs.map((item, i) => {
            return (
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
                            this.state.activeTab === item.eventKey ?
                                <div className={styles.tabArrow}>
                                    <img className={styles.img} src={arrow} alt="arrow"/>
                                </div>
                                :
                                null
                        }
                    </div>
                </NavItem>
            )
        })
    };

    renderTabsContent = () => {
        return this.state.tabsContent.map((item, itemIndex) => {
            return (
                <Tab.Pane eventKey={item.eventKey} key={itemIndex}>
                    <div className={styles.tabContent}>
                        <div className={`${styles[item.figure]} ${styles[item.activeColor]}`}/>
                    </div>
                    <div className={styles.tabsCircleContainer}>
                        { item.colors.map((color, colorIndex) => {
                            return <div key={colorIndex}
                                        className={`${styles.tabsCircle} ${color === item.activeColor ? styles.tabsCircleActive : ''}`}
                                        onClick={() => this.handleChangeColor(itemIndex, color)}
                            />
                        })}
                    </div>
                </Tab.Pane>
            )
        })
    };

    handleSelect = (activeTab) => {
        this.setState({
            activeTab: activeTab + ''
        })
    };

    handleChangeColor = (itemIndex, color) => {
        const tabsContent = this.state.tabsContent;
        tabsContent[itemIndex].activeColor = color;

        this.setState({
            tabsContent
        });
    };

    handleNextTab = () => {
        if (this.state.activeTab === '5') return;

        this.setState({
            activeTab: (+this.state.activeTab + 1).toString()
        })
    };

    render() {
        return (
            <div className={styles.tutorial}>
                <h2 className={styles.title}>What do you need to know to create a Bot?</h2>
                <p className={styles.info}>Follow the numbers of this tutorial</p>

                <Tab.Container
                    id="tabs-with-dropdown"
                    activeKey={this.state.activeTab}
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
