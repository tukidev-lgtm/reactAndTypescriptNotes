import {expect, test} from 'vitest'
import { add } from './math.helpers';

test('should add two positives number' , () => {
    
    const result = add(1,1);
    console.log(result)

   // if(result !== 2){
     //   throw new Error(`The result isn't two`)
    //}
    expect(result).toBe(2);
})