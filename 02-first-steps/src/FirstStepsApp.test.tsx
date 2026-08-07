import { render, screen} from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn( (props: unknown) => {
    return <div data-testid="ItemCounter" />;
} )

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props:unknown) => mockItemCounter(props),
}))

//vi.mock('./shopping-cart/ItemCounter', () => ({
//    ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name={props.itemName} quantity={props.quantity}/>
//}));

describe('FirstStepsApp', () => {

    afterEach(()=>{
        vi.clearAllMocks();
    })

    test('Should match snapshot', () =>{
        
        const {container} = render(<FirstStepsApp/>)

        expect(container).toMatchSnapshot();

        screen.debug();
    } )
    test('Should render the correct number of itemCounter components', () =>{
        render(<FirstStepsApp/>)

        const itemCounters = screen.getAllByTestId('ItemCounter')

        expect(itemCounters.length).toBe(3)
        screen.debug();
    })

    test('Should render ItemCounter with correct props', () => {
        render(<FirstStepsApp/>)

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
        itemName: "Nintendo Switch 2",
        quantity: 5,
        })

    })

})