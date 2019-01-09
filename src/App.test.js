import React from 'react';
import {shallow} from 'enzyme';
// import ReactDOM from 'react-dom';
import App from './App';

describe('<App />', () => {
  const editor = shallow(<App debug/>);
  // it('renders without crashing', () => {
    
  //   // expect(editor).toMatchSnapshot();
  //    expect(editor.find('input').length).toEqual(1);
  //   // ReactDOM.render(<App />, div);
  //   // ReactDOM.unmountComponentAtNode(div);
  // });
  // it('renders a email calendarFrom', () => {
  //   expect(editor.find('#calendarFrom').length).toEqual(1)
  //  });
  // it('renders a password calendarTo', () => {
  //   expect(editor.find('#calendarTo').length).toEqual(1)
  //  });
  //  //expect(z).not.toBeNull();
  //  it('renders a password calendarTo not null', () => {
  //   expect(editor.find('#calendarTo').toBeNull());
  //  });
   it('test validate method', () => {
     console.log(editor);
    const expectedwrongvalue = 'not a validate startdate';
    const expectedrightvalue = true;
    expect(editor.instance().validate(10,2)).toEqual(expectedrightvalue);
    // editor.validate(2,2).toEqual(expectedwrongvalue);
   }
   );
});
