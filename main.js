let fizzNumber = 3;
let buzzNumber = 5;

for(let i = 1; i<=100; i++){
    if((i % fizzNumber === 0) && (i % buzzNumber === 0))
    {
        console.log(`FizzBuzz ${i}`);
    }
    else if(i % fizzNumber === 0)
    {
        console.log(`Fizz ${i}`);
    }
    else if(i % buzzNumber === 0)
    {
        console.log(`Buzz ${i}`);
    }
}