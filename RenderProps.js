class Department extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['Dev', 'Big Data', 'Mobility'],
    };
  }

  render() {
    return (
      <div>
        <h2>Department List...</h2>

        <ul>
          {this.state.list.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Projects List...</h2>

        <ul>
          {this.props.list.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Department></Department>

        <Project list={['P-1', 'P-2', 'P-3']}></Project>
      </React.Fragment>
    );
  }
}

const element = <Page></Page>;

ReactDOM.render(element, document.getElementById('root'));
