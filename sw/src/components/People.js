import React from 'react';
import peopleService from '../service/peopleService';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleList: [],
      loading: false
    }
  }

  async updatePeopleList() {
    const result = await peopleService.getPeopleList();
    return [...this.state.peopleList, ...result.results];
  }

  async componentDidMount() {
    this.setState({loading: true});
    const updatePeopleList = await this.updatePeopleList();
    this.setState({peopleList: updatePeopleList});
    this.setState({loading: false});
    console.log(this.state);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          Loading...
        </div>
      );
    } else {
      return (
        <div className="people">
          People List
          <ul>
          { /*we dont have uid so use item index as last resort for the key */ }
          {this.state.peopleList.map((item, index) =>
            <li key={index}>
              {item.name}
            </li>
          )}
          </ul>
        </div>
      );
    }
  }
}

export default People;