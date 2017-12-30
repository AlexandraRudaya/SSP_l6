import React, { Component } from 'react';
import './Tabs.css';
class Tabs extends Component {
    state = {
        activeTab: 0
    };


    handleClick(id, event) {
        this.setState({
            activeTab: id - 1
        });
    }

    render() {
      const tabs = [
        <p>
            Привет
        </p>,
        <p>
            миу
        </p>,
        <p>
            говорит киса
        </p>
      ]

      return (
        <div className="Tabs">
            <div className="tabs">
                <input id="tab_1" type="radio" name="tabs" checked></input>
                <label onClick={this.handleClick.bind(this, 1)} data-id="1" for="tab_1" title="Основное">Основное</label>

                <input id="tab_2" type="radio" name="tabs" ></input>
                <label onClick={this.handleClick.bind(this, 2)} data-id="2" for="tab_2" title="Образование">Образование</label>

                <input id="tab_3" type="radio" name="tabs" ></input>
                <label onClick={this.handleClick.bind(this, 3)} data-id="3" for="tab_3" title="Контакты">Контакты</label>

                <section  id ="tab_1" data-id="0">
                    {tabs[this.state.activeTab]}
                </section>
                <section onClick={this.handleClick} id ="tab_2" >
        
                </section>
                <section onClick={this.handleClick} id ="tab_3" data-id="2">
            
                </section>
            </div>
        </div>
      );
    }
  }
  
  export default Tabs;