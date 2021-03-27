import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// to ensure that after each cleanup there isn't any leftover memory
//that could give false results
//global function from Jest
afterEach(cleanup);

//use describe function to declare the component we are testing
//use the callback function ()=> to create two tests.
describe('About component', ()=>{
    //first test - baseline to verify the component is rendering
    //we use ther it function -the first argument a string declares whe is being tested and
    //the second argument is a callback function that runs the test
    it('renders', ()=>{
        render(<About/>)
    })
    //second test - to compare snapshots versions of the DOM node struture
    it('matches snapshots DOM node structure', ()=>{
        //render About - as fragment will return a snapshot of the About component
        const {asFragment} = render(<About/>);
        
        // we use expect function with a matcher to compare and see if the expected matches
        //the actual outcome

        expect(asFragment()).toMatchSnapshot();

    })

})








//snapshot - is a serialized version of the DOM node structure, enabled by Jest.