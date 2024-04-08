import { describe, it, expect } from 'vitest';

// Slide 47 - Classes
class SimpleClass {
  // Students need to implement this class according to the koan tests
  // SRP - single responsibility principle - ie one job
  property = 'simple';
}

describe('Slide 47 - Classes', () => {
  it('should create an instance of SimpleClass with a property', () => {
    // The test will fail initially. Students need to add a property to SimpleClass to make it pass.

    const instance = new SimpleClass();
    expect(instance.property).toBeDefined();
  });
});

// Slide 48 - Inheritance
class BaseClass {
  // Students need to define this base class
  // OCP open/closed principle - SOLID 2
  inheritedMethod() {
 return 'inherited value'
  }
  methodToOverride() {
    return 'base value'
  }
}


class InheritedClass extends BaseClass {
  // Students need to define this inherited class
}

describe('Slide 48 - Inheritance', () => {
  it('should inherit a method from BaseClass', () => {
    // This test will fail until the method is properly inherited and implemented
    const instance = new InheritedClass();
    expect(instance.inheritedMethod()).toBe('inherited value');
  });
});

// Slide 49 - Overriding Methods
class OverridingClass extends BaseClass {
  // Students should override a method here
  //LSP - Liskov substitution principle  - SOLID 3
  methodToOverride() {
  return 'this is not the base value'
  }
}

describe('Slide 49 - Overriding Methods', () => {
  it('should override the method from BaseClass', () => {
    // The test will fail until the method is properly overridden
    const instance = new OverridingClass();
    expect(instance.methodToOverride()).not.toBe('base value');
  });
});

// Slide 50 - Constructors and the 'super' Keyword
class SuperClass {
  // Students need to implement the constructor and super
  parentProperty = '';

  constructor(name) {
    this.parentProperty = name;
  }
}

class SuperChildClass extends SuperClass{
  constructor(name) {
    super(name)
  }
}

describe('Slide 50 - Constructors and the "super" Keyword', () => {
  it('should call the parent class constructor', () => {
    // This test will fail until the constructor and super are correctly used
    const instance = new SuperClass('value');
    expect(instance.parentProperty).toBe('value');
  });
});

// Slide 51 to 55 - Visibility Modifiers and Class Members
class VisibilityClass {
  // Students should define public, protected, and private members here
  publicMember = 'public value'
  #privateMember = 'private value'
}

describe('Slide 51 to 55 - Visibility Modifiers and Class Members', () => {
  it('should access a public member', () => {
    // This test will fail until a public member is correctly defined
    const instance = new VisibilityClass();
    expect(instance.publicMember).toBe('public value');
  });

  it('should not be able to access a private member', () => {
    // This test should always fail, as it's testing that private members are not accessible
    const instance = new VisibilityClass();
    //expect(() => instance.#privateMember).toThrow();
  });
});

// We can add more koans here for each slide and concept
