import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


// to ensure that after each cleanup there isn't any leftover memory
//that could give false results
//global function from Jest
afterEach(cleanup);

//add this so the test can handle the props we passed on the Nav
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
  const mockContactSelected = jest.fn();
  const mockSetContactSelected = jest.fn();


describe('NavComponent',()=>{
    //baseline test
    it('renders',()=>{
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />)
    });

    //snapshot test
    it('matches snapshot', ()=>{
        const {asFragment} = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            
        />)

        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

//Test for Emoji visibility

describe('emoji is visible',() =>{
    //Arrange
    it('inserts emoji into the h2',()=>{
        //query to return the element containing the emoji
        const{getByLabelText}= render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

     //Assert -camera is the aria-label, we can also query the element by its aria-label
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    }) 
});

//Test for Link Visibility

describe('links are visible',()=>{
    //verify if links are bein inserted in the <a> tags
    it('inserts text into the links', ()=>{
        //Arrange
        const {getByTestId} = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />)

        //Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');

    })
})

