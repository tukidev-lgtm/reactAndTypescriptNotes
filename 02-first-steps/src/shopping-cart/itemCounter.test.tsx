import { fireEvent, render, screen} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('itemCounter', () => {
    test('should render with default values', () => {
        const itemName = 'Test item';

        render(<ItemCounter itemName= {itemName}/>)
        screen.debug();
        
        expect(screen.getByText(itemName)).toBeDefined();
        expect(screen.getByText(itemName)).not.toBeNull();
        
    })

    test('should render with custom quantity', () => {
        const itemName = 'Test item 2';
        const quantity = 10;

        render(<ItemCounter itemName= {itemName} quantity={quantity}/>)
        screen.debug();
        
        expect(screen.getByText(quantity)).toBeDefined();
        
    })

    test('Should increase count when +1 button is pressed', () => {
        render(<ItemCounter itemName='Test item 3' quantity={1}/>)
        
        const [buttonAdd] = screen.getAllByRole('button')
        
        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();

    }) 

    test('Should not decrease count when -1 button is pressed and quantity is = 1', () => {
        render(<ItemCounter itemName='Test item 3' quantity={2}/>)
        
        const [, ButtonSubstract] = screen.getAllByRole('button')
        
        fireEvent.click(ButtonSubstract);

        expect(screen.getByText('1')).toBeDefined();

    }) 

    test('Should decrease count when -1 button is pressed and quantity > 1', () => {
        render(<ItemCounter itemName='Test item 3' quantity={2}/>)
        
        const [, buttonSubstract] = screen.getAllByRole('button')
        
        fireEvent.click(buttonSubstract);

        expect(screen.getByText('1')).toBeDefined();

    }) 

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'Test item';

        render(<ItemCounter itemName={name} quantity={quantity}/>)

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red')
    })
})