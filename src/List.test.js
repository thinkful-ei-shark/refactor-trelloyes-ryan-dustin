import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import List from './List';
import Store from './STORE'

describe('List component', () => {
  it('List renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="testList" cards={Object.values(Store.allCards)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});