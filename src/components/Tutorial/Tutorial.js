import React, {Component} from 'react';
import { Tab, Row, Col, Nav, NavItem, Button } from 'react-bootstrap';
import arrow from '../../assets/next.svg';
import styles from './Tutorial.scss';

class Tutorial extends Component {
    state = {
        activeTab: '1',
        tabs: [
            {
                eventKey: '1',
                title: 'Module',
                desc: 'The most basic element'
            },
            {
                eventKey: '2',
                title: 'Connection',
                desc: 'Links between modules'
            },
            {
                eventKey: '3',
                title: 'Global Connection',
                desc: 'The other flow fof links'
            },
            {
                eventKey: '4',
                title: 'NLU - Bot training',
                desc: 'Your bot is smart'
            },
            {
                eventKey: '5',
                title: 'Channels',
                desc: 'Where to publish your bot'
            }
        ],
        tabsContent: [
            {
                eventKey: '1',
                figure: 'squareRed'
            },
            {
                eventKey: '2',
                figure: 'circleBlue'
            },
            {
                eventKey: '3',
                figure: 'triangleGreen'
            },
            {
                eventKey: '4',
                figure: 'circleYellow'
            },
            {
                eventKey: '5',
                figure: 'squareYellow'
            },
        ],
        tabCircles: [
            {
                eventKey: '1'
            },
            {
                eventKey: '2'
            },
            {
                eventKey: '3'
            },
            {
                eventKey: '4'
            },
            {
                eventKey: '5'
            },
        ]
    };

    renderTabs = () => {
        return this.state.tabs.map((item, i) => {
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
        return this.state.tabsContent.map((item, i) => {
            return (
                <Tab.Pane eventKey={item.eventKey} key={i}>
                    <div className={styles.tabContent}>
                        <div className={styles[item.figure]}/>
                    </div>
                </Tab.Pane>
            )
        })
    };

    renderCircles = () => {
        return this.state.tabCircles.map((item, i) => {
            return (
                <NavItem eventKey={item.eventKey} key={i}>
                    <div className={`${styles.tabsCircle} ${this.state.activeTab ===  item.eventKey ? styles['tabsCircleActive'] : '' }`}/>
                </NavItem>
            )
        })
    };

    handleSelect = (activeTab) => {
        this.setState({
            activeTab: activeTab + ''
        })
    };

    handleNextTab = () => {
        if (this.state.activeTab === '5') return;

        this.setState({
            activeTab: +this.state.activeTab + 1 + ''
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
                            <Tab.Content animation>
                                {this.renderTabsContent()}
                            </Tab.Content>
                        </Col>
                        <Col sm={8} smOffset={4}>
                            <Nav bsStyle="tabs" bsClass={styles.tabsCircleContainer}>
                                {this.renderCircles()}
                            </Nav>
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
