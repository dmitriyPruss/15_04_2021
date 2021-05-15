const sparrow = {
    name: 'Jack',
    age: 1,
    fly() {
        console.log(this.name +' I can fly!');
    },
};
sparrow.fly();

const sparrowChild = {
    name: 'JJ',
    age: 1,
};

sparrowChild.mother = 'Sparrow mother';
sparrowChild.fly = sparrow.fly;
sparrowChild.fly();