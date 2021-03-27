import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// to ensure that after each cleanup there isn't any leftover memory
//that could give false results
//global function from Jest
afterEach(cleanup);

describe('NavComponent',()=>{
    //baseline test
    it('renders',()=>{
        render(<Nav/>)
    });

    //snapshot test
    it('matches snapshot', ()=>{
        const {asFragment} = render(<Nav/>)

        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

//Test for Emoji visibility

describe('emoji is visible',() =>{
    //Arrange
    it('inserts emoji into the h2',()=>{
        //query to return the element containing the emoji
        const{getByLabelText}= render(<Nav/>);

     //Assert -camera is the aria-label, we can also query the element by its aria-label
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    }) 
});

//Test for Link Visibility

describe('links are visible',()=>{
    //verify if links are bein inserted in the <a> tags
    it('inserts text into the links', ()=>{
        //Arrange
        const {getByTestId} = render(<Nav/>)

        //Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');

    })
})