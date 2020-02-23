import React from 'react'
import './Accordion.css'

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentTabIndex: null 
    }

    handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
    }

    renderList() { 
        return (
            this.props.sections.map((section, index) => (
                <li className='AccordionSection' key={index}>
                    <button onClick={() => this.handleButtonClick(index)}>
                        {section.title}
                    </button>
                    {this.state.currentTabIndex === index && this.renderContent()}
                </li>
            ))
        )
    }

    renderContent() {
        const currentTab = this.props.sections[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render() {
        return (
            <ul className='Accordion'>
                {this.renderList()}
            </ul>
        )
    } 
}

export default Accordion;