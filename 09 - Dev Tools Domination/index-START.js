const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
console.log('hello!')
    // Interpolated
console.log('hello, i am a %s string!', 'ò')
    // Styled
console.log('%c hey im some great text', 'font-size: 50px; background:red; text-shadow:10px 10px 0 blue')
    // warning!
console.warn('Oh No!!!')
    // Error :|
console.error('ah, shit')
    // Info
console.info('clouds weigh a ton')
    // Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is ungood')
    // clearing
console.clear();
    // Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
    // Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})


    // counting

    console.count('west')
    console.count('west')
    console.count('north')
    console.count('west')
    console.count('north')
    console.count('west')
    console.count('north')
    console.count('west')
    console.count('west')
    console.count('north')
    console.count('west')
    console.count('west')

    // timing


    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.log(data)
        })