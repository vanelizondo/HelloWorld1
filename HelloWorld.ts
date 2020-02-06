class HelloWorld {

    constructor(public firstName: string, public lastName: string) {

    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.');
    }

}

const myHelloClassInstance = new HelloWorld('Vanessa', 'Elizondo');
myHelloClassInstance.sayHello();