import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..';

afterEach(cleanup);

describe ('Contact component', ()=>{

    it('renders',()=>{
        render(<ContactForm/>)
    })

    it('matches snapshots DOM node structure', ()=>{
        const {asFragment}= render(<ContactForm/>)

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('tags text is visible', ()=>{
    it('inserts text into the tag',()=>{
        //Arrange
        const {getByTestId} = render(<ContactForm/>)

        //Assert
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit')
    })
})