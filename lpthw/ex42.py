## Animal is-a object
class Animal(object):
    pass

# Dog is-a Animal
class Dog(Animal):

    def __init__(self, name):
        # Dog has-a name of some kind
        self.name = name

# Cat is-a Animal
class Cat(Animal):

    def __init__(self, name):
        # Cat has-a name of some kind
        self.name = name

# Person is-a object
class Person(object):

    def __init__(self, name):
        # Person has-a name of some kind
        self.name = name

        # Person has-a pet of some kind
        self.pet = None

# Employee is-a Person
class Employee(Person):

    def __init__(self, name, salary):
        # Employee is-a Person, has-a name of some kind
        super(Employee, self).__init__(name)
        # Employee has-a salary of some kind
        self.salary = salary


# Fish is-a object
class Fish(object):
    pass

# Salmon is-a Fish
class Salmon(Fish):
    pass

#Halibut is-a Fsih
class Halibut(Fish):
    pass

# Set rover to an instance of class Dog with name Rover
rover = Dog("Rover")

# Set satan to an instance of class Cat with name Satan
satan = Cat("Satan")

# Set mary to an instance of class Person with name Mary
mary = Person("Mary")

# From mary get the pet attribute, set it to satan
mary.pet = satan

# Set frank to an instance of class Employee with name and salary
frank = Employee("Frank", 120000)

# From frank get the pet attribute and set it to rover
frank.pet = rover

# Set flipper to an instance of class Fish
flipper = Fish()

# Set crouse to an instance of class Salmon
crouse = Salmon()

# Set harry to an instance of class Halibut
harry = Halibut()